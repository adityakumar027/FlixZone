const Card = ({title}) =>{
    return (
        <h2>
            <div>
                {title}
            </div>
        </h2>
    )
}
const App = () =>{
    return(
        <div>
            <h2 className='bg-red'> Functional Arrow Component </h2>
            <Card title = "The Star Wars"/>
            <Card title = "Avatars"/>
            <Card title = "The Lion King" > </Card>
            <Card  title = "The Lion kKing" />
            <Card title  = "ADITYA THE GREAT"> </Card>
            <Card title  = "LABBBHAD THE GREAT"> </Card>
        </div>
        
    )
}

export default App
