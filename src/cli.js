import _ from 'lodash'
import helper from '../src/helper.js'

const brainEven = () => {
  const name = helper.brainHello()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const nums = [
    _.random(0, 50),
    _.random(0, 50),
    _.random(0, 50),
  ]
  let congrat = true
  for (const v of nums) {
    console.log(`Question: ${v}`)

    const answer = helper.userAnsver()
    console.log(answer)
    const correct = helper.evenOdd(v)

    if (answer === 'yes' || answer === 'no') {
      if (answer === correct) {
        console.log('Correct!')
      } else {
        congrat = helper.wrongAnsver(answer, correct, name)
        break
      }
    } else {
      congrat = helper.wrongAnsver(answer, correct, name)
      break
    }
  }
  if (congrat) console.log(`Congratulations, ${name}`)
}

const brainCalc = () => {
  const name = helper.brainHello()
  const gameLength = 3
  console.log('What is the result of the expression?')

  const operators = ['+', '-', '*']
  const totalOperators = operators.length - 1
  let congrat = true
  for (let i = 0; i < gameLength; i += 1) {
    const operator = operators[_.random(0, totalOperators)]
    const num1 = _.random(0, 100)
    const num2 = _.random(0, 50)

    console.log(`Question: ${num1} ${operator} ${num2}`)

    const correct = helper.arithmetic(num1, num2, operator)
    const answer = Number(helper.userAnsver())

    if (answer === correct) {
      console.log('Correct!')
    } else {
      congrat = helper.wrongAnsver(answer, correct, name)
      break
    }
  }
  if (congrat) console.log(`Congratulations, ${name}`)
}

const brainGcd = () => {
  const name = helper.brainHello()
  const gameLength = 3
  console.log('Find the greatest common divisor of given numbers.')

  let congrat = true
  for (let i = 0; i < gameLength; i += 1) {
    const num1 = _.random(0, 50)
    const num2 = _.random(0, 50)

    console.log(`Question: ${num1} ${num2}`)

    const correct = helper.gcd(num1, num2)
    const answer = Number(helper.userAnsver())

    if (answer === correct) {
      console.log('Correct!')
    } else {
      congrat = helper.wrongAnsver(answer, correct, name)
      break
    }
  }
  if (congrat) console.log(`Congratulations, ${name}`)
}

const brainProgression = () => {
  const lineLength = 10
  const gameLength = 3
  const name = helper.brainHello()
  console.log('What number is missing in the progression?')

  let congrat = true
  for (let i = 0; i < gameLength; i += 1) {

    const nums = []
    const space = _.random(0, lineLength - 1)
    const step = _.random(5, 20)
    let start = _.random(0, 20)

    for (let i = 0; i < lineLength; i += 1) {
      nums.push(start += step)
    }
    const correct = nums[space]
    nums[space] = '..'

    console.log(`Question: ${nums.join(' ')}`)
    const answer = Number(helper.userAnsver())

    if (answer === correct) {
      console.log('Correct!')
    } else {
      congrat = helper.wrongAnsver(answer, correct, name)
      break
    }
  }
  if (congrat) console.log(`Congratulations, ${name}`)
}

const brainPrime = () => {
  const name = helper.brainHello()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  const nums = [83, 12, 7]
  let congrat = true
  for (const v of nums) {
    console.log(`Question: ${v}`)

    const answer = helper.userAnsver()
    const correct = helper.isPrime(v)

    if (answer === 'yes' || answer === 'no') {
      if (answer === correct) {
        console.log('Correct!')
      } else {
        congrat = helper.wrongAnsver(answer, correct, name)
        break
      }
    } else {
      congrat = helper.wrongAnsver(answer, correct, name)
      break
    }
  }
  if (congrat) console.log(`Congratulations, ${name}`)
}

export { brainEven, brainCalc, brainGcd, brainProgression, brainPrime }
