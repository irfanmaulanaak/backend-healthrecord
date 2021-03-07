const express = require("express");
const lodash = require("lodash");
const router = express.Router();
const web3 = require('../ethereum/web3');
const evoting = require('../ethereum/ehealth');
let accounts = []

web3.eth.getAccounts().then(results => {
  accounts = results
  console.log(accounts)}
)

router.get("/getManager", async (req, res, next) => {
  try {
    const managerData = await evoting.methods.getManager().call({ from: accounts[0] });
    res.json({
      managerData: managerData
    });
  } catch (e) {
    const err_getManager = new Error("Error Message: " + e);
    next(err_getManager);
  }
});

router.post("/addPasien", async (req, res, next) => {
  try{
    accounts = await web3.eth.getAccounts();
    // const tes = web3.eth.personal.unlockAccount(accounts[1], 'password', 3600);
    // console.log(tes)
    const nikPasien = req.body.pasienNik;
    const namaPasien = req.body.pasienName;
    const umurPasien = req.body.pasienAge;
    const alamatPasien = req.body.pasienAddress;
    const registeringPasien = await evoting.methods.addPasien(nikPasien,namaPasien,umurPasien,alamatPasien).send({ from: accounts[0] });
    res.json({
      success : true,
      result : registeringPasien
    });
  }catch (e){
    const err_registeringPasien = new Error("Error: " + e);
    next(err_registeringPasien);
  }
});

router.get("/addTenkes", async (req, res, next) => {
  try{
    accounts = await web3.eth.getAccounts();
    const namaTenkes = req.body.tenkesName;
    const umurTenkes = req.body.tenkesAge;
    const alamatTenkes = req.body.tenkesAddress;
    const registeringTenkes = await evoting.methods.addTenkes(namaTenkes, umurTenkes, alamatTenkes).send({ from: accounts[0] });
    res.json({
      success : true,
      result : registeringTenkes
    });
  }catch (e){
    const err_registeringPasien = new Error("Error: " + e);
    next(err_registeringPasien);
  }
});

router.get("/addPenyakit", async (req, res, next) => {
  try{

  }catch (e){

  }
});

router.get("/getpasien_tenkes", async (req, res, next) => {
  try{
    const nik = req.body.pasienNik;
    const pasienData = await evoting.methods.getpasien_tenkes(nik).call({ from: accounts[0] })
    res.json({
      pasienData: pasienData
    });
  }catch (e){
    const err_registeringPasien = new Error("Error: " + e);
    next(err_registeringPasien);
  }
});

router.get("/getpenyakit_tenkes", async (req, res, next) => {
  try{

  }catch (e){

  }
});
router.post("/getrumahsakit", async (req, res, next) => {
  try{
    const idRS = req.body.idRS;
    const rsData = await evoting.methods.getinfors(idRS).call({ from:accounts[0] })
    res.json({
      rsData: rsData
    });
  }catch(e){
    const err_getinfors = new Error ("Error: " + e);
    next(err_getinfors);
  }
});

router.get("/getpasien_pasien", async (req, res, next) => {
  try{
    const pasienData = await evoting.methods.getpasien_pasien().call({ from: accounts[1] })
    res.json({
      pasienData: pasienData
    });
  }catch (e){
    const err_registeringPasien = new Error("Error: " + e);
    next(err_registeringPasien);
  }
});

router.get("/getpenyakit_pasien", async (req, res, next) => {
  try{

  }catch (e){

  }
});

router.get("/getpasien_pasien", async (req, res, next) => {
  try{

  }catch (e){

  }
});

router.get("/check_pasien", async (req, res, next) => {
  try{

  }catch (e){

  }
});

router.get("/check_tenkes", async (req, res, next) => {
  try{

  }catch (e){

  }
});
module.exports = router;