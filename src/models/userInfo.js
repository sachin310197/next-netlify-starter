import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userInfoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  dob: {
    type: String,
  },
  educationalBackground: {
    type: String,
  },
  businessName: {
    type: String,
  },
  businessAddress: {
    type: String,
  },
  businessPhone: {
    type: String,
  },
  businessMail: {
    type: String,
  },
  website: {
    type: String,
  },
  businessNature: {
    type: String,
  },
  businessProducts: {
    type: String,
  },
  usp: {
    type: String,
  },
  targetMarket: {
    type: String,
  },
  businessGoal: {
    type: String,
  },
  businessPlan: {
    type: String,
  },
  businessChallenges: {
    type: String,
  },
  marketResearch: {
    type: String,
  },
  mainCompetitors: {
    type: String,
  },
  competitionStrategies: {
    type: String,
  },
  financialStatus: {
    type: String,
  },
  funding: {
    type: String,
  },
  useFunds: {
    type: String,
  },
  profitabilityTimeline: {
    type: String,
  },
  marketProducts: {
    type: String,
  },
  pricingStrategy: {
    type: String,
  },
  keyMembers: {
    type: String,
  },
  relevantExperience: {
    type: String,
  },
  addressSkillGap: {
    type: String,
  },
  legalConsiderations: {
    type: String,
  },
  necessaryLicenses: {
    type: String,
  },
  socialImpactGoals: {
    type: String,
  },
  impactMeasurePlan: {
    type: String,
  },
  additionalInfo: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
});

const UserInfo = model('UserInfo', userInfoSchema)
export default UserInfo

/**
* @swagger
* components:
*   schemas:
*     User:
*       type: object
*       properties:
*         email:
*           type: string
*         name:
*           type: string
*         username:
*           type: string
*         type:
*           type: string
*           enum: ['user', 'admin', 'creator', 'reader']
*         language:
*           type: string
*           enum: ['tr', 'en']
*         isPremium:
*           type: boolean
*         gender:
*           type: string
*           enum: ['male', 'female', 'other']
*         countryCode:
*           type: string
*         timezone:
*           type: number
*         birthDate:
*           type: string
*         photoUrl:
*           type: string
*         isActivated:
*           type: boolean
*         isVerified:
*           type: boolean
*         deviceId:
*           type: string
*         platform:
*           type: string
*           enum: ['Android', 'IOS']
*         deletedAt:
*           type: string
*/