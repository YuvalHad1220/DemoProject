import { createContext, useEffect, useState } from 'react';

const SiteContext = createContext({
    isLoggedIn: false,
    isInDarkMode: false,
    isManager: false,
    sessionID: null,
    pernum: null,
    gdud: null,
    onDarkModeToggle: () => {},
    onLogOut: () => {},
    onLogIn: (pernum) => {},
    onAddRakam: () => {},
});

export const SiteContextProvider = (props) => {
    // on initial render we will want to fetch the state of both being logged in and dark mode
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isInDarkMode, setDarkMode] = useState(false);
    const [isManager, setManager] = useState(null);
    const [gdud, setGdud] = useState(null);
    const [pernum, setPernum] = useState(null);

    // handle dark mode toggling
    const onToggle = () => {
        setDarkMode((prevState) => {
            localStorage.setItem('isDarkMode', !prevState ? '1' : '0');
            return !prevState;
        });
    }

    // handle log out and log in
    const logoutHandler = () => {
        localStorage.setItem('isLoggedIn', '0');
        setLoggedIn(false);
      };

    useEffect(() => {
    }, []);
    
    const loginHandler = (pernum) => {
        const logIn = async (pernum) => {
            try {
                const result = await fetch('http://127.0.0.1:3001/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({pernum})
                    });


                if (!result.ok){
                    throw new Error('Didnt get right result code');
                }
                const data = await result.json();
                if (data.error){
                    throw new Error(data.error_message);
                }
                console.log(data);
                setManager(data.user.isManager);
                setGdud(data.user.gdud);
                setPernum(data.user.pernum);
                setLoggedIn(true);
            }

            catch (err){
                console.log("ERROR: ", err);
                return;
            }

        }

    logIn(pernum);
    };


    return (
        <SiteContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                isInDarkMode: isInDarkMode,
                isManager: false,
                sessionID: null,
                pernum: null,
                gdud: null,
                onDarkModeToggle: () => onToggle,
                onLogOut: () => logoutHandler,
                onLogIn: (pernum) => loginHandler(pernum),
                onAddRakam: () => {},
            }}>
            {props.children}
        </SiteContext.Provider>
    );
    
}

export default SiteContext;