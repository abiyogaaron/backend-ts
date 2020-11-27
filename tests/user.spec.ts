import mongoose from 'mongoose';
import User from '../src/api/user/user.model';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/app';

const should = chai.should();
const BASE_API = '/api/users';
chai.use(chaiHttp);

describe('User', () => {
  beforeEach((done) => {
    User.remove({}, (err) => {
      done();
    })
  });
  /** TEST GET API USER */
  describe('/GET User', () => {
    it('it should GET all the Users', (done) => {
      chai.request(server)
        .get(BASE_API)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a('array');
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  /** TEST POST API USER */
  describe('/POST User (/api/users/register)', () => {
    it('it should not succeed when POST a user without nim field', (done) => {
      let userData = {
        password: "123456",
        name: "Abiyoga",
        class: "XII-IPA-2"
      };

      chai.request(server)
        .post(BASE_API+'/register')
        .send(userData)
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.message.should.have.property('errors');
          res.body.message.errors.should.have.property('nim');
          res.body.message.errors.nim.should.have.property('message').eql('Path `nim` is required.');
          done();
        })
    });

    it('it should succeed when POST a user with full data', (done) => {
      let userData = {
        nim: "13110110110",
        password: "123456",
        name: "Abiyoga",
        class: "XII-IPA-2"
      };

      chai.request(server)
        .post(BASE_API+'/register')
        .send(userData)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('success');
          res.body.success.should.have.property('_id');
          res.body.success.should.have.property('nim');
          res.body.success.should.have.property('password');
          res.body.success.should.have.property('name');
          res.body.success.should.have.property('class');
          res.body.success.should.have.property('salt');
          res.body.success.should.have.property('created');
          done();
        });
    })
  });
});
