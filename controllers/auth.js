import User from '../models/User.js';
import EnairaUser from '../models/EnairaUser.js';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import request from 'request';

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send('User has been created.');
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, 'User not found!'));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, 'Wrong password or username!'));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};

export const registerEnairaUser = async (req, res, next) => {
  try {
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(req.body.password, salt);

    // const newUser = new User({
    //   ...req.body,
    //   password: hash,
    // });

    console.log('ReqPosUser', 'EKe Ferdinand');

    const newEnairaUserData = {
      source: 'TESTAPP',
      app_user_id: 'TESTAPPUSR',
      app_branch_code: '099',
      account_branch_code: '099',
      customer_no: '007479302',
      account_class: '020008',
      account_ccycode: 'NGN',
      account_name: 'DANIEL MAKINDE',
      account_onpnd: 'N',
      account_onpostnocr: 'N',
      account_ondormant: 'N',
      account_classtype: 'S',
      account_opendate: '2022-06-20 12:00:00',
      account_onfrozen: 'N',
      chequebook_account: 'N',
      atm_account: 'N',
      min_balreqd: '0',
      salary_account: 'N',
      maker_id: 'TESTAPPUSR',
      checker_id: 'TESTAPPUSR',
      auth_stat: 'A',
      comp_mis2: 'ABK',
      comp_mis3: '',
      comp_mis4: '12632119',
    };

    const options = {
      method: 'POST',
      url: 'https://rgw.k8s.apis.ng/centric-platforms/uat/CreateCustomerAccount',
      headers: {
        ClientId: `${process.env.AFF_API_KEY}`,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: newEnairaUserData,
    };

    // request(options, function (error, response, body) {
    //   if (error) throw new Error(error);

    //   console.log(body);
    // });

    // await newUser.save();
    res.status(200).send('User has been created.');
  } catch (err) {
    next(err);
  }
};
