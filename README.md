
# Ethereum Address Type Checker

The Ethereum Address Type Checker is a Geth application that allows users to determine the type of an Etherum address, specifically distinguishing between smart contracts and externally owned accounts (EOAs). The application provides a simple HTTP servr that responds with the address type and, for EOAs, the balance information.


## Features

- heck the type of an Ethereum address (smart contract or EOA).
- Retrieve the balance of an EOA in Ether.


## Prerequisites

- Go 1.15 or later installed.
- Infura project URL (to connect to the Ethereum network)


## Installation

Clone the repository or download the source code:

```bash
  git clone <repository_url>

```

Navigate to the project directory:

```bash
cd ethereum-address-type-checker

```

Install the required dependencies:

```bash
go get -u github.com/ethereum/go-ethereum

```
    
## Usage

Build the application:

```bash
go build

```

Run the application:

```bash
./ethereum-address-type-checker

```

The application will start the server on localhost at port 8080.

Open your Postman, web browser or any client and access the application using the following URL:

```bash
http://localhost:8080/check?address=<ethereum_address>

```
Replace <ethereum_address> with the Ethereum address you want to check.

The server will respond with the address type in JSON format. If the address is an EOA, it will also include the balance information in Ether.

