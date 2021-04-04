const express = require("express");
const lodash = require("lodash");
const router = express.Router();
const web3 = require('../ethereum/web3');
const ehealth = require('../ethereum/ehealth');
let accounts = []

web3.eth.getAccounts().then(results => {
  accounts = results
  console.log(accounts)}
)

router.get("/getManager", async (req, res, next) => {
  try {
    const managerData = await ehealth.methods.getManager().call({ from: accounts[5] });
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
    const nikPasien = req.body.nik;
    const namaPasien = req.body.nama;
    const umurPasien = req.body.umur;
    const alamatPasien = req.body.alamat;
    const registeringPasien = await ehealth.methods.addPasien(nikPasien,namaPasien,umurPasien,alamatPasien).send({ from: accounts[5] });
    
    res.json({
      success : true,
      result : registeringPasien
    });
  }catch (e){
    const err_registeringPasien = new Error("Error: " + e);
    next(err_registeringPasien);
    console.log(e);
    console.log(accounts[5]);
    
  }
});


router.post("/addPenyakit", async (req, res, next) => {
  try{
    accounts = await web3.eth.getAccounts();
    const nikPasien = req.body.nik;
    const penyakitPasien = req.body.penyakit;
    const tambahPenyakit = await ehealth.methods.addPenyakit(nikPasien,penyakitPasien).send({ from:accounts[5] });

    res.json({
      success : true,
      result : tambahPenyakit
    });

  }catch (e){
    const err_tambahPenyakit = new Error("Error: " + e);
    next (err_tambahPenyakit);
  }
});
router.post("/addInfo", async (req, res, next) => {
  try{
    accounts = await web3.eth.getAccounts();
    const _nik = await req.body.nik;
    const _guldar = await req.body.guldar;
    const _tekanan = await req.body.tekanandarah;
    const _bb = await req.body.berat;
    const _tb = await req.body.tinggi;
    const tambahInfoKes = await ehealth.methods.addInfoKesehatan(_nik,_guldar,_tekanan,_bb,_tb).send({ from:accounts[5] });

    res.json({
      success : true,
      result : tambahInfoKes
    });
  }catch(e){
    const err_tambahinfo = new Error("Error: " + e);
    next (err_tambahinfo);
    
  }
})

router.get("/getpasien_tenkes", async (req, res, next) => {
  try{
    const nik = req.body.pasienNik;
    const pasienData = await ehealth.methods.getpasien_rs(nik).call({ from: accounts[5] })
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
router.get("/getrumahsakit", async (req, res, next) => {
  try{
    const idRS = req.body.idRS;
    const rsData = await ehealth.methods.getinfors(idRS).call({ from:accounts[0] })
    res.json({
      rsData: rsData
    });
  }catch(e){
    const err_getinfors = new Error ("Error: " + e);
    next(err_getinfors);
  }
});

router.get("/checkRS", async (req, res, next) => {
  try {
    const auth = await ehealth.methods.check_rs().call({ from: accounts[2] });
    res.json({
      auth: auth
    });
  } catch (e) {
    const err_checkrs = new Error("Error Message: " + e);
    next(err_checkrs);
  }
});

router.get("/checkManager", async (req, res, next) => {
  try {
    const auth = await ehealth.methods.check_manager().call({ from: accounts[2] });
    res.json({
      auth: auth
    });
  } catch (e) {
    const err_checkrs = new Error("Error Message: " + e);
    next(err_checkrs);
  }
});

router.post("/addRumahSakit", async (req, res, next) => {
  try{
    accounts = await web3.eth.getAccounts();
    // const tes = web3.eth.personal.unlockAccount(accounts[0], 'password', 3600);
    // console.log(tes)
    const ethaddress = req.body.address;
    const namars = req.body.nama;
    const idrs = req.body.id;
    const alamatrs = req.body.alamat;
    const registeringHospital = await ehealth.methods.addRumahSakit(ethaddress,namars,idrs,alamatrs).send({ from:'0x743783c84fd1287BEE94142CDD7EB5Ed41079cD0' });
    
    res.json({
      success : true,
      result : registeringHospital
    });
  }catch (e){
    const err_registeringHospital = new Error("Error: " + e);
    next(err_registeringHospital);
  }
});

module.exports = router;