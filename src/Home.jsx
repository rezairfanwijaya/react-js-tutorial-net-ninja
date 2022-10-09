const Home = () => {
    // function ini akan dipanggil ketika pertama kali halaman dibuka
    // atau halaman di reload
    // tanpa kita mengklik tombol nya
    // jika pada pemanggilan function menggunakan ()
    // bisa dilihat pada button Click Me
    const handleClick = (e) => {
        alert('Hallo Antusism')
    }

    // function ini akan dipanggil ketika kita hanya menekan tombol saja
    // tidak terpengaruh ketika membuka halaman atau merefresh halaman 
    // seperti function handleClick diatas
    const handleClickAgain = (name, e) =>{
        if( name === undefined ){
            alert('Hallo admin')
        }else {
            console.log('Hallo ' + name + e.target)
        }
    }

    return ( 
        <div className="home">
            <h1>Homepage</h1>
            {/* pemanggilan event tanpa menggunakan anonymous function */}
            <button onClick={ handleClick() }>Click Me</button>

            {/* pemanggilan event menggunakan anonymout function */}
            <button onClick={ (e)=>handleClickAgain('reza', e) }>Click Me Again</button>
        </div>
     );
}
 
export default Home;