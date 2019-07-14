const uuid4 = require('uuid/v4')
const createUser = ({name=""} = {})=>({
  id:uuid4(),
  name
})

module.exports = {
  createUser
}
