import { motion } from 'framer-motion'
import './App.css'
import Image from '../src/assets/vite.svg'
function App() {
  const pVatiants = {
    hidden: { x: 500, opacity: 0 },
    visible: { opacity: 1, x: 0 },
  }
  const listVariants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: { opacity: 0 },
  }

  const items = ['text1', 'text2', 'text12', 'text3', 'text4', 'text5', 'text6']
  return (
    <div className="main">
      <motion.p
        initial={{ x: 500 }}
        animate={{
          x: 0,
        }}
        transition={{ duration: 3 }}
      >
        Д
        <motion.span
          initial={{ x: 500 }}
          animate={{
            x: 0,
          }}
          transition={{ duration: 4 }}
        >
          о
        </motion.span>{' '}
        и П
        <motion.span
          initial={'hidden'}
          animate={'visible'}
          transition={{ duration: 5 }}
          variants={pVatiants}
        >
          о
        </motion.span>
        сле
      </motion.p>
      <motion.img
        src={Image}
        alt=""
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: 'mirror',
          type: 'tween',
        }}
      />
      <motion.span
        whileHover={{ scale: 1.1, color: 'green' }}
        transition={{ duration: 0.6 }}
      >
        Animation on hove
      </motion.span>
      {items.map((el, i) => {
        return (
          <motion.li
            variants={listVariants}
            initial={'hidden'}
            animate={'visible'}
            custom={i} // для добавления параметров к listVariants
            key={el}
          >
            <p>{el}</p>
          </motion.li>
        )
      })}
    </div>
  )
}

export default App
