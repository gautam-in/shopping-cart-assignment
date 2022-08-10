import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const message = {
    minLength: "Password should contain atleast 6 characters",
    numberAlphabet: 'Password should contain atleast 1 number and 1 alphabet',
    space: "Password should not contain any space"
}

const errorCodes = {
    minLength: false,
    numberAlphabet: false,
    space: false
}


export default function TextBox({ title = "textbox", id = "textbox", type = "text" }) {
    const [err, setErr] = useState(errorCodes)
    const [confirmPassErr, setConfirmPassErr] = useState('')

    const checkPassword = (e) => {
        let val = e.target.value
        if (val.length <= 6) {
            err["minLength"] = true
            setErr({ ...err })
        } else {
            err["minLength"] = false
            setErr({ ...err })
        }

        if (!val.match(/^[0-9a-zA-Z]+$/)) {
            err["numberAlphabet"] = true
            setErr({ ...err })
        } else {
            err["numberAlphabet"] = false
            setErr({ ...err })
        }

        if (!val.match(/^\S*$/)) {
            err["space"] = true
            setErr({ ...err })
        } else {
            err["space"] = false
            setErr({ ...err })
        }
    }

    const checkConfirmPassword = (e) => {
        let val = e.target.value
        let password = document.getElementById('password')
        if (val !== password.value) {
            setConfirmPassErr('Password and Confirm Password should be same.')
        } else {
            setConfirmPassErr('')
        }
    }

    if (id === "password") {
        return (
            <div className='input-group'>
                <input id={id} type={type} required aria-required onChange={(e) => checkPassword(e)} />
                <label htmlFor={id}>{title}</label>
                {
                    Object.keys(err).map((code) => {
                        return err[code] ? <p>{message[code]}</p> : null
                    })
                }
            </div>
        )
    }

    if (id === "confirmPassword") {
        return (
            <div className='input-group'>
                <input
                    id={id}
                    type={type}
                    required
                    aria-required
                    aria-message={confirmPassErr}
                    onChange={(e) => checkConfirmPassword(e)} />
                <label htmlFor={id}>{title}</label>
                <p>{confirmPassErr}</p>
            </div>
        )
    }

    return (
        <div className='input-group'>
            <input id={id} type={type} required aria-required />
            <label htmlFor={id}>{title}</label>
        </div>
    )
}
