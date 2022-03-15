const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory(
        "MyEpicGame"
    );
    const gameContract = await gameContractFactory.deploy(
        ["Thresh", "Arthas", "Magikarp"], // Names
        [
            "https://imgs.search.brave.com/Uz8XHFzVof5bd6sfXwrFGyO1AF_HugnZatLFsMm269M/rs:fit:1000:500:1/g:ce/aHR0cHM6Ly9pbWcu/cmFua2VkYm9vc3Qu/Y29tL3dwLWNvbnRl/bnQvcGx1Z2lucy9s/ZWdlbmRzLW9mLXJ1/bmV0ZXJyYS9hc3Nl/dHMvdW5pdC1hbmQt/Y2hhbXBpb24tYXJ0/d29yay8wMVNJMDUy/VDEtZnVsbC5wbmc", // Images
            "https://imgs.search.brave.com/RIN5-utZGXgzDrzuCIhCzIt_DKtAV2KD1WaiWxZ7BnQ/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzc5/NTMwZjEzLWQ5Yjgt/NGRhZi1iZTg3LTFh/ZTM4YTNjZWU3Ny9k/ZGtocGhrLWU4MWYx/YjQyLWEzNTctNGU2/Ni05YmY1LTVjYmE2/OWM2YTdjZS5wbmcv/djEvZmlsbC93XzE2/MDAsaF85MDAscV84/MCxzdHJwL2FydGhh/c19ieV9udXJzZXJr/X2Rka2hwaGstZnVs/bHZpZXcuanBnP3Rv/a2VuPWV5SjBlWEFp/T2lKS1YxUWlMQ0po/YkdjaU9pSklVekkx/TmlKOS5leUp6ZFdJ/aU9pSjFjbTQ2WVhC/d09qZGxNR1F4T0Rn/NU9ESXlOalF6TnpO/aE5XWXdaRFF4TldW/aE1HUXlObVV3SWl3/aWFYTnpJam9pZFhK/dU9tRndjRG8zWlRC/a01UZzRPVGd5TWpZ/ME16Y3pZVFZtTUdR/ME1UVmxZVEJrTWpa/bE1DSXNJbTlpYWlJ/NlcxdDdJbWhsYVdk/b2RDSTZJanc5T1RB/d0lpd2ljR0YwYUNJ/Nklsd3ZabHd2Tnpr/MU16Qm1NVE10WkRs/aU9DMDBaR0ZtTFdK/bE9EY3RNV0ZsTXpo/aE0yTmxaVGMzWEM5/a1pHdG9jR2hyTFdV/NE1XWXhZalF5TFdF/ek5UY3ROR1UyTmkw/NVltWTFMVFZqWW1F/Mk9XTTJZVGRqWlM1/d2JtY2lMQ0ozYVdS/MGFDSTZJanc5TVRZ/d01DSjlYVjBzSW1G/MVpDSTZXeUoxY200/NmMyVnlkbWxqWlRw/cGJXRm5aUzV2Y0dW/eVlYUnBiMjV6SWwx/OS52Tm5hT3BxajdK/MGZic3ZLOXhERVk3/SjBqaUJQSms5dU5X/ZjBLTUVfeXQ4",
            "https://imgs.search.brave.com/e65tvAMphU_47bvnhSu-wtI95rMxJXC86wtmUBcL-PE/rs:fit:754:845:1/g:ce/aHR0cHM6Ly93d3cu/cG9rZXBlZGlhLmZy/L2ltYWdlcy8wLzA2/L01hZ2ljYXJwZS1S/RlZGLnBuZw",
        ],
        [100, 200, 25], // HP values
        [100, 50, 25], // Attack damage values
        "Elon Musk", // Boss name
        "https://i.imgur.com/AksR0tt.png", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );

    await gameContract.deployed();

    console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
