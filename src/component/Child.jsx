

const Child = ({title})=>{
    console.log(title)

    return(
        <>
        <h1>Hello I'm displaying the child{title?.title}</h1>

        </>
    )

}


export default Child

