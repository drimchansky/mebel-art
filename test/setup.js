import 'jest-styled-components'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

const realDescribe = describe
describe = (name, fn) => {
  realDescribe(name, () => {
    fn()
  })
}
