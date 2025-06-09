const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CertModule", (m) => {
        const cert = m.contract("Certi");
        return { cert };
    });