import reactLogo from '../assets/react.svg'

type Props = {}

export default function Header({}: Props) {
  return (
    <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
  )
}