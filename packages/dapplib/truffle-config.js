require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strike rival noble modify hover another army gauge'; 
let testAccounts = [
"0x27dfc8cb0b48d82b8b2a62741700768caf8db055374405220983316a52bb2507",
"0x7bd35ac540f541bfb4644599e95a88d6b4fee4d4114db5ec72d53de4f9a4124c",
"0x795b9aa1b57bf693cd751845432bd9e0eb716a7d880324ad2f8129809f731c4e",
"0x9888b970656e45ee0369b5101e162cc783b9979fbe24d010d401b01d1940faaf",
"0x9bfda54a4a71f1a0d3a389ea54adfa317abb77b04efe6811d9c534cd3f39b5b9",
"0x73d55f173b253f8ad9551d30bbf9c3c9c9a039309c289b1462ea283e9e80e05e",
"0xf65868fd99bb184593ef28ebdb8442940f3f321d5bfa5ceca3a12ca8ca6effca",
"0x7ab2dc7ecce38fc6586bc795d02a3fc9847cbbf10c9cced75af7a8edc4b15e40",
"0x98446117a395df99522acbf929358b3fec7ae899d0e50f66d3ca5c89fa948b1a",
"0xdc74117046344f1ba480d23ca64ff699b35fa3b4e7ec7cb61378eaddd32e7545"
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

