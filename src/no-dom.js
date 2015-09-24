import Test from './tests'

export default function TestWrapper(component, config){
  return new Test(component, config)
}
