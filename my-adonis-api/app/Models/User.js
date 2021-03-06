"use strict";

const Model = use("Model");

const Hash = use("Hash");

class User extends Model {
  static get table() {
    return "users";
  }

  static boot() {
    super.boot();

    this.addHook("beforeSave", async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  tokens() {
    return this.hasMany("App/Models/Token");
  }

  static async createUser(data) {
    const newUser = await this.create(data);

    return newUser;
  }

  static async getUsers(filter) {
    const allUsers = await this.query().where(filter).fetch();

    return allUsers;
  }
}

module.exports = User;

// 'use strict'

// /** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
// const Model = use('Model')

// /** @type {import('@adonisjs/framework/src/Hash')} */
// const Hash = use('Hash')

// class User extends Model {
//   static boot () {
//     super.boot()

//     /**
//      * A hook to hash the user password before saving
//      * it to the database.
//      */
//     this.addHook('beforeSave', async (userInstance) => {
//       if (userInstance.dirty.password) {
//         userInstance.password = await Hash.make(userInstance.password)
//       }
//     })
//   }

//   /**
//    * A relationship on tokens is required for auth to
//    * work. Since features like `refreshTokens` or
//    * `rememberToken` will be saved inside the
//    * tokens table.
//    *
//    * @method tokens
//    *
//    * @return {Object}
//    */
//   tokens () {
//     return this.hasMany('App/Models/Token')
//   }
// }

// module.exports = User
