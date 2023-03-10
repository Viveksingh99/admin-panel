import React from 'react'
import './home.css'
import FeaturedInfo from '../../components/featuredinfo/Featuredinfo'
import Chart from '../../components/chart/Chart'
import { userData } from '../../Dummy'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

function Home() {
  return (
    <div className='Home'>
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className='homewidgets'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home