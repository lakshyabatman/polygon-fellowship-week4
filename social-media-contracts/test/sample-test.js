const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SocialMedia",async  function () {
  

  it("initialize properly", async function () {
    const SocialMedia = await ethers.getContractFactory("SocialMedia");
    const socialMedia = await SocialMedia.deploy();
    await socialMedia.deployed();
    expect(socialMedia.address.length).to.greaterThan(0);
  });

  it("should allow user to post image", async function () {
    const SocialMedia = await ethers.getContractFactory("SocialMedia");
    const socialMedia = await SocialMedia.deploy();
    const [owner, addr] = await ethers.getSigners();
    await socialMedia.deployed();
    await socialMedia.deployed();
    const initalCount = await socialMedia.count();
    await socialMedia.post("test");
    const postCount = await socialMedia.count();
    expect(Number(initalCount) +1 == Number(postCount)).to.true;
    const post = await socialMedia.db('0');
    expect(post.author == owner.address).to.true

  });



});
