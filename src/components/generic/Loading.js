import React, { useEffect, useState } from "react"
import useInterval from "use-interval"
import { CSSTransition } from "react-transition-group"
import heroku from "../images/heroku.svg"

const Loading = ({ isLoading, setIsLoading }) => {
  useEffect(() => {
    setIsLoading(true)
  }, [])

  useInterval(
    async () => {
      setIsLoading(false)
    },
    5000,
    false
  )

  console.log("is loading", isLoading)
  return (
    <>
      <CSSTransition
        in={isLoading}
        timeout={200000}
        classNames="loading__transition"
      >
        <div className="loading">
          <div className="loading__content container">
            <div className="loading__img-container">
              <img src={heroku} alt="heroku logo" />
              <div className="loading__z fadeOutZOne">Z</div>
              <div className="loading__z fadeOutZTwo">Z</div>
            </div>
            <p>Waking up Heroku</p>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}

export default Loading
