package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"math"
	"math/big"
	"net/http"
	"strconv"
	"time"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
)

type Response struct {
	Type    string `json:"type"`
	Balance string `json:"balance,omitempty"`
	Error   string `json:"error,omitempty"`
}

type BalanceResponse struct {
	Balance string `json:"balance"`
}

type AddressInfo struct {
	Address   string `json:"address"`
	Type      string `json:"type"`
	Balance   string `json:"balance,omitempty"`
	Error     string `json:"error,omitempty"`
	Timestamp int64  `json:"timestamp"`
}

var (
	infuraURL      = "https://mainnet.infura.io/v3/ac7fe75399a146fe821d83ce4c7c512e"
	cacheExpiry    = 5 * time.Minute
	addressInfoMap = make(map[string]AddressInfo)
)

func checkAddress(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")

	address := r.URL.Query().Get("address")
	if address == "" {
		http.Error(w, "Address not provided", http.StatusBadRequest)
		return
	}

	addressInfo, ok := addressInfoMap[address]
	if ok && time.Now().Unix()-addressInfo.Timestamp <= int64(cacheExpiry.Seconds()) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(addressInfo)
		return
	}

	client, err := ethclient.Dial(infuraURL)
	if err != nil {
		log.Println("Error connecting to Ethereum client:", err)
		http.Error(w, "Error connecting to Ethereum client", http.StatusInternalServerError)
		return
	}

	if !common.IsHexAddress(address) {
		response := Response{Type: "invalid"}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
		return
	}

	code, err := client.CodeAt(context.TODO(), common.HexToAddress(address), nil)
	if err != nil {
		log.Println("Error checking code at address:", err)
		http.Error(w, "Error checking code at address", http.StatusInternalServerError)
		return
	}

	response := Response{
		Type: "contract",
	}

	if len(code) == 0 {
		response.Type = "EOA"

		balance, err := client.BalanceAt(context.TODO(), common.HexToAddress(address), nil)
		if err != nil {
			log.Println("Error retrieving balance:", err)
			response.Error = "Error retrieving balance"
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(response)
			return
		}
		response.Balance = weiToEther(balance)
	}

	addressInfoMap[address] = AddressInfo{
		Address:   address,
		Type:      response.Type,
		Balance:   response.Balance,
		Error:     response.Error,
		Timestamp: time.Now().Unix(),
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func weiToEther(wei *big.Int) string {
	etherValue := new(big.Float)
	etherValue.SetString(wei.String())
	etherValue.Quo(etherValue, big.NewFloat(math.Pow10(18))) // 10^18 wei in 1 ether
	ether, _ := etherValue.Float64()
	return strconv.FormatFloat(ether, 'f', 8, 64) // 8 decimal places
}

func main() {
	http.HandleFunc("/check", checkAddress)
	fmt.Println("Server listening on port 8080...")
	http.ListenAndServe(":8080", nil)
}
