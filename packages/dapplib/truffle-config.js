require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note stereo home inner cloth fog sock'; 
let testAccounts = [
"0x70f339533f4ada8fd0e761a83251c9b5556d1215b61eb38018cbd6846ce6ab61",
"0x89466eae12e0f5b7d62ff9524cf597c9b4587ae8e550df6bfb0b0a736905dcfd",
"0x5e6e6978985eafd3cb7bc0ef490a64220919e24beff888afaf86cc9a1afcd330",
"0x5a00aa8f68602812506574c82131ce8e3f2d19f4189b90457363613219c1849b",
"0x9e7aaa729aaafca6d6550ad7b5567b1cfd995d2cea4050dc0c491c97b80a1401",
"0xc1c4302c16605981c3381f638d4de65db305228bdb5596b7fc9948374416d149",
"0xef62b47ecf69def359ea44ccb793c34bbfbfcbd1c42353232dda7e3a430b347d",
"0x03c0de90b956dc311c9f665faf9a73a5c91b8fdc8e9f900eccb6cde9d111a1b2",
"0xa390fe695beb79b66fccea2e6807a7dd7fc38f9ad5f9b23d4768609f974d7331",
"0xfbd6e7df23779d16ea5258908dd2fd96a7c8fe2c1e0f22d8dc5eeb74df715944"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

