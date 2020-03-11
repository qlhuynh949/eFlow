class ItemClass {
  constructor(name, description, category, condition, price, sell_date, location, owner_id){
    this.name = name,
    this.description = description,
    this.category = category,
    this.price = price,
    this.sell_date = sell_date, 
    this.location = location,
    this.owner_id = owner_id
  }
  get name(){
    return this.name
  }
  set name (val){
    this.name = val
  }
  get description(){
    return this.description
  }
  set description(val){
    this.description = val
  }
  get price(){
    return this.price
  }
  set price(val){
    this.price = price
  }
  get location(){
    return this.location
  }

}

module.exports = ItemClass