

const MemeCard = ({setShow  ,  MetaData }) => {
    console.log( MetaData)

  return (
    <div>

    <img src={MetaData.preview[2]}/>
    <button onClick={()=>setShow(false)}>all memes</button>
    </div>
  )
}

export default MemeCard