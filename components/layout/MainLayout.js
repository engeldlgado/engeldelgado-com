import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../navigation/Navigation'

const Layout = ({ children, title, description, ogType, ogUrl, ogImage, ogDescription, schemaObject }) => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme')
      if (theme) {
        setTheme(theme)
      } else {
        localStorage.setItem('theme', 'dark')
        setTheme('dark')
      }
    }
  }, [])

  useEffect(() => {
    if (theme !== '' && typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', theme)
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme', theme)
      } else {
        document.documentElement.setAttribute('data-theme', theme)
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', theme)
      }
    }
  }, [theme])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={ogDescription} />
        <meta property='og:type' content={ogType} />
        <meta property='og:url' content={ogUrl} />
        <meta property='og:image' content={ogImage} />
        <script type='application/ld+json'>
          {schemaObject}
        </script>
      </Head>
      <Navigation
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
