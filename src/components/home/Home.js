import React, { useState } from "react"
import Loading from "../generic/Loading"

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className="app">
      <Loading isLoading={isLoading} setIsLoading={setIsLoading} />
      <button
        className="home opaque fadeInDelayed"
        onClick={() => setIsLoading(true)}
      >
        Reload
      </button>
    </div>
  )
}

export default Home
