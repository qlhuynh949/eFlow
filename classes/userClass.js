class UserClass {
  constructor(username, email, password, first_name, last_name, active, permissions ){
    this.username = username,
    this.email = email,
    this.password = password, 
    this.first_name = first_name,
    this.last_name = last_name,
    this.active = active
  }
  get username(){
    return this.username
  }
  set username(val){
    this.username = val
  }
  get email(){
    return this.email
  }
  set email(val){
    this.email = val
  }
  get password(){
    return this.password
  }
  set password(val){
    this.password = val
  }
  get active(){
    return this.active
  }
}


module.exports = UserClass