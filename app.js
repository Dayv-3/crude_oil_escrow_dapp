
let provider;
let signer;
let contract;
let userAddress;

const contractAddress = "0x01f0e578449657eE6B535305f208Bbe896cA1841";
const sellerAddress = "0xb8388BFE5de66aF5A973C12eE8473b0fb4a489A5".toLowerCase();
const inspectorAddress = "0x87B0A85d76f5Fd0079063F71C4964921343ed308".toLowerCase();

async function connectWallet() {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    userAddress = (await signer.getAddress()).toLowerCase();
    document.getElementById("walletAddress").innerText = `Connected: ${userAddress}`;

    contract = new ethers.Contract(contractAddress, contractABI, signer);

    if (userAddress === sellerAddress) {
      document.getElementById("sellerSection").style.display = "block";
    }
    if (userAddress === inspectorAddress) {
      document.getElementById("inspectorSection").style.display = "block";
    }
  } else {
    alert("Install MetaMask first!");
  }
}

async function updateStatus() {
  const status = document.getElementById("statusInput").value;
  try {
    const tx = await contract.updateShipmentStatus(status);
    await tx.wait();
    alert("Shipment status updated!");
  } catch (err) {
    alert(err.message);
  }
}

async function confirmDelivery() {
  try {
    const tx = await contract.confirmDelivery();
    await tx.wait();
    alert("Delivery confirmed!");
  } catch (err) {
    alert(err.message);
  }
}

async function releaseFunds() {
  try {
    const tx = await contract.autoRefundIfTimedOut();
    await tx.wait();
    alert("Funds released!");
  } catch (err) {
    alert(err.message);
  }
}

async function getBalance() {
  try {
    const balance = await provider.getBalance(contractAddress);
    document.getElementById("balanceDisplay").innerText = ethers.utils.formatEther(balance) + " ETH";
  } catch (err) {
    alert(err.message);
  }
}
