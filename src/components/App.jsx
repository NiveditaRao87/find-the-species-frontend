import React from "react";
import AppBar from "./AppBar";

function App() {

    const styles={
        mainStyle: {
            background: `url('speciesTitle.jpg') no-repeat center center fixed`,
            backgroundSize: 'cover',
            height: '90vh'
        }
    }


    return <>
        <div style={styles.mainStyle} >
        <AppBar />
        {/* <img className = "img-disp" src = "title-image.jpe" alt = "sunrise over a lake" /> */}
        <main>
        </main>
        </div>
        <footer style={{textAlign: 'center'}}>
        <a style={{fontSize: '1rem'}} href='https://www.instagram.com/vikranthupili/'>Background image credited to Vikranth Thupili</a>
        </footer>
        </>
}

export default App;