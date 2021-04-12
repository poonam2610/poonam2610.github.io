import React from 'react'
import HomePageContent from './HomePageContent/HomePageContent'
import HomePageFooter from './HomePageFooter/HomePageFooter'
import HomePageHeader from './HomePageHeader/HomePageHeader'

function HomePage() {
    return (
        <div>
            <HomePageHeader />
            <HomePageContent />
            <HomePageFooter />
        </div>
    )
}

export default HomePage
