import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
  {
    // username: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // country: {
    //   type: String,
    //   required: true,
    // },
    // img: {
    //   type: String,
    // },
    // city: {
    //   type: String,
    //   required: true,
    // },
    // phone: {
    //   type: String,
    //   required: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    // },
    // isAdmin: {
    //   type: Boolean,
    //   default: false,
    // },

    source: {
      type: String,
      description: 'Source',
      example: 'BWONLINE',
    },
    app_user_id: {
      type: String,
      description: 'App User ID',
      example: 'BWORLDUSER',
    },
    app_branch_code: {
      type: String,
      description: 'App Branch Code',
      example: 99,
    },
    account_branch_code: {
      type: String,
      description: 'Account Branch Code',
      example: '171',
    },
    customer_no: {
      type: String,
      example: 8117565,
      description: 'Customer Number',
    },
    account_class: {
      type: String,
      example: '020003',
      description: 'Account Class',
    },
    account_ccycode: {
      type: String,
      example: 'NGN',
      description: 'Account Country Currency Code',
    },
    account_name: {
      type: String,
      example: 'Nick Thomas',
      description: 'Account Name',
    },
    account_onpostnocr: {
      type: String,
      example: 'N',
      description: 'Account On POST NO CREDIT?',
    },
    account_ondormant: {
      type: String,
      example: 'N',
      description: 'Account On Dormant?',
    },
    account_classtype: {
      type: String,
      example: 'S',
      description: 'Account Class Type',
    },
    account_opendate: {
      type: String,
      example: '2020-08-03',
      description: 'Account Opening Date',
    },
    account_onfrozen: {
      type: String,
      example: 'N',
      description: 'Account On Frozen?',
    },
    chequebook_account: {
      type: String,
      example: 'Y',
      description: 'Cheque Book Account?',
    },
    atm_account: {
      type: String,
      example: 'Y',
      description: 'ATM Account?',
    },
    min_balreqd: {
      type: String,
      example: '0',
      description: 'Minimum Balance Required',
    },
    salary_account: {
      type: String,
      example: 'N',
      description: 'Salary Account?',
    },
    maker_id: {
      type: String,
      example: 'BWORLDUSER',
      description: 'Maker ID',
    },
    checker_id: {
      type: String,
      example: 'BWORLDUSER',
      description: 'Checker ID',
    },
    auth_stat: {
      type: String,
      example: 'A',
      description: 'Auth Stat',
    },
    comp_mis2: {
      type: String,
      example: 'RBB256',
      description: 'Comp MIS 2',
    },
    comp_mis3: {
      type: String,
      description: 'Comp MIS 3',
    },
    comp_mis4: {
      type: String,
      example: '12338618',
      description: 'Comp MIS 4',
    },
    account_onpnd: {
      type: String,
      example: 'N',
      description: 'Account On POST NO DEBIT?',
    },
  },
  { timestamps: true }
);

export default mongoose.model('EnairaUser', UserSchema);
