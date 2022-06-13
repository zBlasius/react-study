import React, { useState, useEffect, useCallback } from 'react'
import data from './data.json'
import './hangman.css'
import { useParams } from 'react-router-dom'

const Hangman = props => {
    const [word, setWord] = useState(data.Word)
    const [user, setUser] = useState(data.User)
    const [gameProgress, setGameProgress] = useState(data.GameProgress)
    // Dados vindos do banco ˆˆˆˆˆˆˆˆˆˆˆˆˆ

    const [currentWord, setCurrentWord] = useState('MACARRONADA');
    const [anonWord, setAnomWord] = useState([]);
    const [letterChoiced, setLetterChoiced] = useState('')
    const [allLetterChoiced, setAllLetterChoiced] = useState([])
    const [allLife, setAllLife] = useState(5)
    const [keyCode, setKeyCode] = useState('');

    useEffect(() => {
        createAnonWord();
    }, [])

    // useEffect(()=>{
    //     window.addEventListener('keydown', (event)=>{
    //         if(event.keyCode == 13 && event.event == 'Enter' && letterChoiced != ''){
    //             handleInput(letterChoiced);
    //         }
    //     });
    //     return () => window.removeEventListener('keydown', keyEvent)
    // },[])


    function checkWinTheGame(listAnonWord){
        let isThereAnyAnonWord = listAnonWord.filter(item => item == ' _ ');
        if(isThereAnyAnonWord.length == 0) {
            alert('TU GANHOU !!!!!!!!!')
            lostGame()
        }
    }

    function createAnonWord() {
        let sizeWord = currentWord.length;
        let _anonWord = [];
        for (let i = 0; i < sizeWord; i++) {
            _anonWord.push(' _ ')
        }

        setAnomWord(_anonWord);
    }

    function handleInput(letter) {
        letter = letter.toUpperCase();
        if (!/([A-Z])\b/g.test(letter)) return alert('SÓ LETRA O RAMELÃO')
        if(allLetterChoiced.includes(letter)) return
        let arrayWord = transformWordInArray(currentWord);
        let arrayAnonWord = transformWordInArray(anonWord);
        let _allLife
        setAllLetterChoiced([...allLetterChoiced, letter])

        let foundLetter = false
        arrayWord.forEach((element, index) => {
            if (element == letter) {
                arrayAnonWord[index] = letter;
                foundLetter = true;
            }
        });

        if(!foundLetter) {
            _allLife = allLife - 1;
            setAllLife(_allLife);
        }

        if (_allLife == 0) {
            return lostGame();
        }

        setLetterChoiced('');
        setAnomWord([...arrayAnonWord]);
        checkWinTheGame(arrayAnonWord);

    }

    function lostGame() {
        setAnomWord([]);
        setAllLetterChoiced([]);
        createAnonWord();
        setAllLife(5);
        setLetterChoiced('');
    }

    function transformWordInArray(word) {
        let _array = [];
        for (let i = 0; i < word.length; i++) {
            _array.push(word[i]);
        }
        return _array;
    }


    return (
        <div className='body'>
            <div className='section'>
            <h2>{allLife}</h2>
                <div className='display-word'>
                    <h1>
                        {anonWord.map((letter, index) => (
                            <span key={letter + `${index}`}> {letter} </span>
                        ))}
                    </h1>

                </div>

                <div className='input-all-letter-choiced'>

                    <h2 className='display-letter-choiced'>
                        {allLetterChoiced.map((letter, index) => (
                            <span key={letter + `${index}`}> {letter.toUpperCase()} </span>
                        ))}
                    </h2>


                    <div className='block-input'>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            handleInput(letterChoiced)
                        }} className="input-hangman" maxLength={1} onChange={(e) => setLetterChoiced(e.target.value)}>
                            <input className="input-hangman" maxLength={1} value={letterChoiced} onChange={(e) => setLetterChoiced(e.target.value)} />
                        </form>
                        {/* <button value='submeter' onClick={() => handleInput(letterChoiced)}> Submeter </button> */}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hangman