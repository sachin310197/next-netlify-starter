import { User, UserInfo } from '../../../../models/index.js';
import { validateEditUser } from '../../../validators/user.validator.js';
import { errorHelper, logger, getText, turkishToEnglish } from '../../../../utils/index.js';
import { awsAccessKey, awsSecretAccessKey, awsRegion, bucketName } from '../../../../config/index.js';
import aws from 'aws-sdk';
const { S3 } = aws;

const s3 = new S3({
  accessKeyId: awsAccessKey,
  secretAccessKey: awsSecretAccessKey,
  region: awsRegion,
  signatureVersion: 'v4',
});

export default async (req, res) => {

  // const user = await UserInfo.findById(req.body.userId).catch((err) => {
  //   return res.status(500).json(errorHelper('00082', req, err.message));
  // });
  // console.log('user>>>>>>>>>>>>>>>>>>>>',req.body.userId,user)
//   if(user){
// // name: "",
// if (req.body.name) user.name = req.body.name;
// // email: "",
// if (req.body.email) user.email = req.body.email;
// // phone: "",
// if (req.body.phone) user.phone = req.body.phone;
// // address:"",
// if (req.body.address) user.address = req.body.address;
// // dob: "",
// if (req.body.dob) user.dob = req.body.dob;
// // educationalBackground:"",
// if (req.body.educationalBackground) user.educationalBackground = req.body.educationalBackground;
// // businessName:"",
// if (req.body.businessName) user.businessName = req.body.businessName;
// // businessAddress:"",
// if (req.body.businessAddress) user.businessAddress = req.body.businessAddress;
// // businessPhone:"",
// if (req.body.businessPhone) user.businessPhone = req.body.businessPhone;
// // businessMail:"",
// if (req.body.businessMail) user.businessMail = req.body.businessMail;
// // website:"",
// if (req.body.website) user.website = req.body.website;
// // businessNature: "",
// if (req.body.businessNature) user.businessNature = req.body.businessNature;
// // businessProducts:"",
// if (req.body.businessProducts) user.businessProducts = req.body.businessProducts;
// // usp:"",
// if (req.body.usp) user.usp = req.body.usp;
// // targetMarket: "",
// if (req.body.targetMarket) user.targetMarket = req.body.targetMarket;
// // businessGoal:"",
// if (req.body.businessGoal) user.businessGoal = req.body.businessGoal;
// // businessPlan:"",
// if (req.body.businessPlan) user.businessPlan = req.body.businessPlan;
// // businessChallenges:"",
// if (req.body.businessChallenges) user.businessChallenges = req.body.businessChallenges;
// // marketResearch:"",
// if (req.body.marketResearch) user.marketResearch = req.body.marketResearch;
// // mainCompetitors:"",
// if (req.body.mainCompetitors) user.mainCompetitors = req.body.mainCompetitors;
// // competitionStrategies:"",
// if (req.body.competitionStrategies) user.competitionStrategies = req.body.competitionStrategies;
// // financialStatus:"",
// if (req.body.financialStatus) user.financialStatus = req.body.financialStatus;
// // funding:"",
// if (req.body.funding) user.funding = req.body.funding;
// // useFunds:"",
// if (req.body.useFunds) user.useFunds = req.body.useFunds;
// // profitabilityTimeline:"",
// if (req.body.profitabilityTimeline) user.profitabilityTimeline = req.body.profitabilityTimeline;
// // marketProducts:"",
// if (req.body.marketProducts) user.marketProducts = req.body.marketProducts;
// // pricingStrategy:"",
// if (req.body.pricingStrategy) user.pricingStrategy = req.body.pricingStrategy;
// // keyMembers:"",
// if (req.body.keyMembers) user.keyMembers = req.body.keyMembers;
// // relevantExperience:"",
// if (req.body.relevantExperience) user.relevantExperience = req.body.relevantExperience;
// // addressSkillGap:"",
// if (req.body.addressSkillGap) user.addressSkillGap = req.body.addressSkillGap;
// // legalConsiderations:"",
// if (req.body.legalConsiderations) user.legalConsiderations = req.body.legalConsiderations;
// // necessaryLicenses:"",
// if (req.body.necessaryLicenses) user.necessaryLicenses = req.body.necessaryLicenses;
// // socialImpactGoals:"",
// if (req.body.socialImpactGoals) user.socialImpactGoals = req.body.socialImpactGoals;
// // impactMeasurePlan:"",
// if (req.body.impactMeasurePlan) user.impactMeasurePlan = req.body.impactMeasurePlan;
// // additionalInfo:""
// if (req.body.additionalInfo) user.additionalInfo = req.body.additionalInfo;
//   }
let userInfo = new UserInfo({
name : req.body.name,
// email: "",
email : req.body.email,
// phone: "",
phone : req.body.phone,
// address:"",
address : req.body.address,
// dob: "",
dob : req.body.dob,
// educationalBackground:"",
educationalBackground : req.body.educationalBackground,
// businessName:"",
businessName : req.body.businessName,
// businessAddress:"",
businessAddress : req.body.businessAddress,
// businessPhone:"",
businessPhone : req.body.businessPhone,
// businessMail:"",
businessMail : req.body.businessMail,
// website:"",
website : req.body.website,
// businessNature: ""
businessNature : req.body.businessNature,
// businessProducts:"",
businessProducts : req.body.businessProducts,
// usp:"",
usp : req.body.usp,
// targetMarket: "",
targetMarket : req.body.targetMarket,
// businessGoal:"",
businessGoal : req.body.businessGoal,
businessPlan : req.body.businessPlan,
businessChallenges : req.body.businessChallenges,
marketResearch : req.body.marketResearch,
mainCompetitors : req.body.mainCompetitors,
competitionStrategies : req.body.competitionStrategies,
financialStatus : req.body.financialStatus,
funding : req.body.funding,
useFunds : req.body.useFunds,
profitabilityTimeline : req.body.profitabilityTimeline,
marketProducts : req.body.marketProducts,
pricingStrategy : req.body.pricingStrategy,
keyMembers : req.body.keyMembers,
relevantExperience : req.body.relevantExperience,
addressSkillGap : req.body.addressSkillGap,
legalConsiderations : req.body.legalConsiderations,
necessaryLicenses : req.body.necessaryLicenses,
socialImpactGoals : req.body.socialImpactGoals,
impactMeasurePlan : req.body.impactMeasurePlan,
additionalInfo : req.body.additionalInfo,
userId: req.body.userId
});



  let hasError = false;
  // if (req.file) {
  // const params = {
  //   Bucket: bucketName,
  //   Key: turkishToEnglish(user.name).replace(/\s/g, '').toLowerCase() + '/' + user._id + '/' + Date(Date.now()).toLowerCase().substring(0, 15).replace(/\s/g, '-'),
  //   Body: req.file.buffer,
  //   ContentType: req.file.mimetype,
  // };

  // await s3.upload(params).promise().then((data) => {
  //   user.photoUrl = data.Location;
  // }).catch(err => {
  //   hasError = true;
  //   return res.status(500).json(errorHelper('00087', req, err.message)).end();
  // });
  // }
// console.log('userInfo>>>>>>>>>>',userInfo)
  if (!hasError) {
  await userInfo.save().catch((err) => {
    console.log('userInfo>>>>>>>>>>',err)
    return res.status(500).json(errorHelper('00085', req, err.message));
  });

  //NOTE: The only thing we should send to the front is the url of the uploaded photo. Front-end knows all other changes.
  // logger('00086', req.user._id, getText('en', '00086'), 'Info', req);
  return res.status(200).json({
    resultMessage: { en: getText('en', '00086'), tr: getText('tr', '00086') },
    resultCode: '00086',
    // photoUrl: user.photoUrl
  });
  }
};


/**
 * @swagger
 * /user/add-info:
 *   post:
 *     summary: Add the Profile Information
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         type: string
 *         required: true
 *         description: Bearer token (e.g., "Bearer <access_token>")
 *       - in: formData
 *         name: image
 *         required: false
 *         type: file
 *         description: Add file here
 *     requestBody:
 *       description: Some of the user profile information to change
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               dob:
 *                 type: string
 *               educationalBackground:
 *                 type: string
 *               businessName:
 *                 type: string
 *               businessAddress:
 *                 type: string
 *               businessPhone:
 *                 type: string
 *               businessMail:
 *                 type: string
 *               website:
 *                 type: string
 *               businessNature:
 *                 type: string
 *               businessProducts:
 *                 type: string
 *               usp:
 *                 type: string
 *               targetMarket:
 *                 type: string
 *               businessGoal:
 *                 type: string
 *               businessPlan:
 *                 type: string
 *               businessChallenges:
 *                 type: string
 *               marketResearch:
 *                 type: string
 *               mainCompetitors:
 *                 type: string
 *               competitionStrategies:
 *                 type: string
 *               financialStatus:
 *                 type: string
 *               funding:
 *                 type: string
 *               useFunds:
 *                 type: string
 *               profitabilityTimeline:
 *                 type: string
 *               marketProducts:
 *                 type: string
 *               pricingStrategy:
 *                 type: string
 *               keyMembers:
 *                 type: string
 *               relevantExperience:
 *                 type: string
 *               addressSkillGap:
 *                 type: string
 *               legalConsiderations:
 *                 type: string
 *               necessaryLicenses:
 *                 type: string
 *               socialImpactGoals:
 *                 type: string
 *               impactMeasurePlan:
 *                 type: string
 *               additionalInfo:
 *                 type: string
 *               userId:
 *                 type: string
 *     tags:
 *       - User
 *     responses:
 *       "200":
 *         description: Your profile information was changed successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 resultMessage:
 *                   $ref: '#/components/schemas/ResultMessage'
 *                 resultCode:
 *                   $ref: '#/components/schemas/ResultCode'
 *                 photoUrl:
 *                   type: string
 *       "400":
 *         description: Please provide valid values for each key you want to change.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Result'
 *       "401":
 *         description: Invalid token.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Result'
 *       "500":
 *         description: An internal server error occurred, please try again.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Result'
 */

