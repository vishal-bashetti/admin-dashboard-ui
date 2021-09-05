import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
export default function home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart/>
        </div>
    )
}
