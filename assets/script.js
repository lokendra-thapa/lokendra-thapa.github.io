// Blog posts data
const blogPosts = {
    1: {
        title: "Digital Agriculture in Nepal: Opportunities and Challenges",
        date: "January 2026",
        readTime: "6 min read",
        content: `
            <h2>Introduction</h2>
            <p>Nepal's agricultural sector employs over 60% of the population and contributes significantly to the national economy. Yet, traditional farming methods still dominate, leaving immense room for technological intervention. Digital agriculture presents a transformative opportunity to enhance productivity, improve resource efficiency, and uplift rural livelihoods.</p>

            <h2>The Current State</h2>
            <p>Nepalese farmers face numerous challenges: unpredictable weather patterns, fragmented landholdings, limited access to market information, and inadequate extension services. Most farming decisions are still based on traditional knowledge and personal experience, which, while valuable, can be enhanced significantly through data-driven insights.</p>

            <h2>Opportunities in Digital Agriculture</h2>
            <p>The proliferation of smartphones and improving internet connectivity in rural Nepal creates unprecedented opportunities. Agro-advisory systems can now provide real-time, location-specific recommendations on irrigation, fertilization, pest control, and optimal harvesting times. These systems leverage weather forecasts, soil data, and crop models to deliver actionable insights directly to farmers' phones.</p>

            <p>Geographic Information Systems (GIS) and remote sensing technologies enable precision mapping of agricultural lands, helping in land-use planning, crop monitoring, and yield estimation. Tools like Google Earth Engine make satellite data accessible, allowing even small-scale farmers to benefit from advanced monitoring capabilities.</p>

            <h2>Challenges to Overcome</h2>
            <p>Despite the opportunities, several barriers exist. Digital literacy remains low among farming communities, and many farmers are hesitant to trust technology over traditional methods. Infrastructure challenges, particularly reliable internet connectivity and electricity in remote areas, limit technology adoption.</p>

            <p>Developing appropriate solutions requires understanding local contexts, languages, and farming practices. Generic solutions often fail because they don't account for Nepal's unique terrain, crop diversity, and socio-economic conditions.</p>

            <h2>The Way Forward</h2>
            <p>Success requires a multi-pronged approach: developing user-friendly, vernacular language applications; providing hands-on training to farmers; ensuring affordable access to technology; and creating demonstration sites where farmers can see benefits firsthand. Collaboration between agricultural engineers, software developers, extension workers, and farming communities is essential.</p>

            <p>As agricultural engineers, we have the responsibility and opportunity to bridge the technology gap, making advanced agricultural practices accessible at the farmers' level. The future of Nepalese agriculture is digital, but it must be inclusive, appropriate, and farmer-centered.</p>
        `
    },
    2: {
        title: "Designing Efficient Irrigation Systems for Nepalese Terrain",
        date: "December 2025",
        readTime: "7 min read",
        content: `
            <h2>Understanding Nepal's Unique Terrain</h2>
            <p>Nepal's topography ranges from the Terai plains to the high Himalayas, creating diverse agricultural zones with distinct irrigation challenges. Designing irrigation systems for such varied terrain requires careful consideration of elevation changes, water availability, soil types, and crop requirements.</p>

            <h2>Irrigation System Options</h2>
            <p><strong>Drip Irrigation:</strong> Particularly suitable for hill regions and high-value crops. Drip systems deliver water directly to plant roots through emitters, minimizing water loss through evaporation and runoff. In Nepal's hilly terrain, drip irrigation can function effectively even with minimal pressure, making it ideal for areas with limited water sources.</p>

            <p><strong>Sprinkler Systems:</strong> More appropriate for relatively flat terrain in the Terai and inner Terai regions. Modern sprinkler systems can be designed with variable application rates to account for soil variations within a field. They're particularly effective for crops with shallow root systems and high water requirements.</p>

            <p><strong>Micro-sprinklers:</strong> A middle ground between drip and conventional sprinklers, micro-sprinklers work well for orchards and vegetable gardens common in Nepal's mid-hills. They provide broader coverage than drip systems while maintaining water efficiency.</p>

            <h2>Design Considerations</h2>
            <p>Water source assessment is critical. Whether it's from tube wells, surface water, springs, or community water systems, understanding flow rates, water quality, and seasonal availability determines system feasibility. In hilly regions, gravity-fed systems can eliminate pumping costs, but require careful hydraulic design to maintain appropriate pressure.</p>

            <p>Topographic surveys using modern tools like GPS and GIS help optimize pipeline layouts, minimize excavation, and ensure proper water distribution. Soil analysis informs emitter spacing, application rates, and filtration requirements.</p>

            <h2>Economic Viability</h2>
            <p>Cost-benefit analysis is essential. While modern irrigation systems require upfront investment, the long-term benefits—water savings, increased yields, reduced labor, and the ability to grow off-season crops—often justify the cost. Government subsidies and group irrigation schemes can make these systems more accessible to smallholder farmers.</p>

            <h2>Maintenance and Sustainability</h2>
            <p>The longevity of irrigation systems depends on proper maintenance. Training farmers in system operation, filter cleaning, and basic troubleshooting ensures sustainability. Using locally available materials where possible and designing for easy repair enhances system longevity in rural areas.</p>
        `
    },
    3: {
        title: "Agricultural Market Price Forecasting Using Python",
        date: "December 2025",
        readTime: "8 min read",
        content: `
            <h2>The Importance of Market Intelligence</h2>
            <p>Farmers often face the challenge of selling their produce at unfavorable prices due to lack of market information. Price forecasting helps farmers make informed decisions about when to plant, what to plant, and when to sell, ultimately improving their income and reducing post-harvest losses.</p>

            <h2>Data Collection and Preparation</h2>
            <p>Market price forecasting begins with collecting historical price data from various sources—government agricultural market information systems, wholesale markets, and retail outlets. For Nepal, sources like the Kalimati Fruits and Vegetable Market provide valuable daily price data for numerous commodities.</p>

            <p>Using Python's pandas library, we can clean and organize this data, handling missing values, outliers, and ensuring consistent time series. Data preprocessing is crucial—converting dates to proper format, aggregating prices by week or month, and normalizing values for analysis.</p>

            <h2>Time Series Analysis Techniques</h2>
            <p>Several approaches work well for agricultural price forecasting. ARIMA (AutoRegressive Integrated Moving Average) models capture trends and seasonal patterns in price data. These models are particularly effective when prices show clear seasonal variations, as many agricultural commodities do.</p>

            <p>Python's statsmodels library provides tools for ARIMA modeling, while Prophet (developed by Facebook) offers a more user-friendly approach that automatically detects seasonality and handles holidays. For Nepalese markets, accounting for festivals like Dashain and Tihar, which significantly affect vegetable demand and prices, is essential.</p>

            <h2>Machine Learning Approaches</h2>
            <p>Advanced techniques using scikit-learn can incorporate multiple variables—weather patterns, production forecasts, import data, and festival calendars—to improve prediction accuracy. Random Forest and Gradient Boosting models often perform well, capturing complex non-linear relationships in market data.</p>

            <h2>Practical Implementation</h2>
            <p>The real value lies in making forecasts accessible to farmers. Interactive dashboards built with Plotly can display price trends, forecasts, and alerts. Web applications or mobile apps can deliver weekly price predictions for key commodities in local languages, helping farmers plan their marketing strategies.</p>

            <h2>Validation and Continuous Improvement</h2>
            <p>Forecasting models must be validated against actual prices and refined regularly. Tracking accuracy metrics like RMSE (Root Mean Square Error) and MAE (Mean Absolute Error) helps assess model performance. As new data becomes available, models should be retrained to maintain accuracy.</p>
        `
    },
    4: {
        title: "GIS and Remote Sensing in Precision Farming",
        date: "November 2025",
        readTime: "7 min read",
        content: `
            <h2>Understanding the Technology</h2>
            <p>Geographic Information Systems (GIS) and remote sensing technologies have revolutionized how we understand and manage agricultural lands. These tools provide spatial data and analysis capabilities that enable precision farming practices, even in resource-limited settings like Nepal.</p>

            <h2>GIS Applications in Agriculture</h2>
            <p>ArcGIS allows agricultural engineers to create detailed maps of farmlands, analyzing soil types, elevation, slope, and water availability. These spatial analyses inform decisions about crop selection, irrigation system design, and land management practices.</p>

            <p>By overlaying multiple data layers—soil maps, rainfall data, temperature zones, and existing land use—we can identify optimal areas for specific crops, plan irrigation networks efficiently, and assess erosion risks. In Nepal's diverse terrain, such spatial planning is particularly valuable.</p>

            <h2>Google Earth Engine for Monitoring</h2>
            <p>Google Earth Engine (GEE) provides free access to decades of satellite imagery and powerful cloud-based processing capabilities. For agricultural applications, GEE enables monitoring of vegetation health using indices like NDVI (Normalized Difference Vegetation Index), tracking crop growth throughout seasons, and detecting changes in land use.</p>

            <p>I've used GEE to analyze agricultural land changes in Nepalese districts, tracking deforestation, expansion of agricultural areas, and assessing crop health across large regions. The ability to process years of satellite data quickly makes GEE invaluable for agricultural research and planning.</p>

            <h2>Practical Applications</h2>
            <p>Precision farming using GIS and remote sensing enables variable rate application of inputs. Instead of uniform fertilizer application across entire fields, farmers can apply nutrients precisely where needed, based on soil fertility maps and crop vigor measurements from satellite imagery.</p>

            <p>Crop yield estimation before harvest helps farmers and policymakers plan logistics and market strategies. Disease and pest monitoring through spectral analysis can identify stressed crops early, enabling timely interventions.</p>

            <h2>Making It Accessible</h2>
            <p>While GIS technology might seem complex, user-friendly applications can make it accessible to extension workers and progressive farmers. Mobile apps that integrate GIS data, providing location-specific recommendations based on spatial analysis, bridge the gap between sophisticated technology and field-level application.</p>

            <h2>The Future</h2>
            <p>As satellite imagery becomes more frequent and higher resolution, and as computing power increases, the applications of GIS and remote sensing in agriculture will expand further. Combining these technologies with IoT sensors, drones, and AI analytics creates comprehensive precision farming systems that can significantly enhance agricultural productivity and sustainability.</p>
        `
    },
    5: {
        title: "Automated Tunnel Farming: The Future of Protected Cultivation",
        date: "November 2025",
        readTime: "6 min read",
        content: `
            <h2>What is Tunnel Farming?</h2>
            <p>Tunnel farming, also known as polytunnel or hoop house farming, involves growing crops inside plastic-covered structures. These structures protect crops from adverse weather, pests, and diseases while creating controlled environments that extend growing seasons and improve yields.</p>

            <h2>The Need for Automation</h2>
            <p>Traditional tunnel farming requires significant manual labor for ventilation, irrigation, and monitoring. Automation addresses these challenges by integrating climate sensors, automated ventilation systems, precision irrigation, and real-time monitoring capabilities.</p>

            <h2>Climate Control Systems</h2>
            <p>Automated tunnel farms use temperature and humidity sensors connected to motorized vents and fans. When internal temperature exceeds set thresholds, vents open automatically, maintaining optimal growing conditions. During cold periods, heating systems can activate to protect crops from frost.</p>

            <p>Modern systems can be controlled remotely via mobile apps, allowing farmers to monitor and adjust conditions from anywhere. This is particularly valuable for peri-urban farmers who may have off-farm employment.</p>

            <h2>Precision Irrigation</h2>
            <p>Automated drip irrigation systems, controlled by soil moisture sensors, ensure crops receive optimal water without waste. These systems can be programmed for different crop zones within the tunnel, accommodating varied water needs of different plants.</p>

            <h2>Economic Considerations</h2>
            <p>Initial investment in automated tunnel farming is higher than traditional structures. However, benefits include reduced labor costs, higher and more consistent yields, ability to grow premium crops, extended growing seasons, and better resource efficiency.</p>

            <p>For Nepal, where labor costs are rising and urban markets demand year-round fresh produce, automated tunnels present an attractive opportunity, particularly for vegetable and flower production near urban centers.</p>

            <h2>Challenges and Solutions</h2>
            <p>Electricity reliability is crucial for automation. Solar panels with battery backup can address this in Nepal's context. Technical knowledge requirements mean farmers need training in system operation and basic troubleshooting.</p>

            <p>Starting with semi-automated systems—perhaps just automated irrigation—allows farmers to gradually adopt technology as they gain confidence and experience.</p>

            <h2>Environmental Benefits</h2>
            <p>Automated tunnels optimize resource use, reducing water consumption and minimizing fertilizer runoff. Protected cultivation means fewer pesticides are needed, resulting in cleaner produce and less environmental contamination.</p>
        `
    },
    6: {
        title: "Building Location-Specific Crop Calendars",
        date: "October 2025",
        readTime: "5 min read",
        content: `
            <h2>The Importance of Crop Calendars</h2>
            <p>Traditional crop calendars based on general guidelines often don't account for local climate variations, changing weather patterns, and specific soil conditions. Location-specific crop calendars provide farmers with tailored planting schedules that optimize yields and reduce risks.</p>

            <h2>Data Integration</h2>
            <p>Creating effective crop calendars requires integrating multiple data sources. Weather data—historical temperature, rainfall, and humidity patterns—forms the foundation. Soil data including texture, pH, and fertility levels helps determine nutrient availability and water retention characteristics.</p>

            <p>Crop-specific requirements—growing degree days, water needs, and critical growth stages—must be matched with local conditions. In Nepal's varied terrain, these parameters can change significantly within short distances due to elevation and aspect differences.</p>

            <h2>Weather Data APIs</h2>
            <p>Modern crop calendars utilize weather forecast APIs to provide real-time adjustments. Seven-day forecasts help farmers time operations like irrigation, pesticide application, and harvesting. Historical weather data analysis identifies optimal planting windows and helps predict seasonal patterns.</p>

            <h2>System Design</h2>
            <p>A practical crop calendar system allows farmers to input their location (coordinates or district/VDC) and view recommended crops for their area. The system then generates planting schedules, indicating optimal sowing dates, key management activities, and expected harvest times.</p>

            <p>Using Python with libraries like pandas for data processing and Plotly for visualization, we can create interactive crop calendars that farmers can access via web or mobile interfaces.</p>

            <h2>Accounting for Climate Change</h2>
            <p>Climate patterns are shifting. Traditional calendars based only on historical data may become less reliable. Modern systems should incorporate climate trend analysis and provide adaptive recommendations, perhaps suggesting earlier planting dates for heat-sensitive crops or recommending drought-tolerant varieties.</p>

            <h2>User Experience</h2>
            <p>For maximum adoption, crop calendar systems must be simple to use, available in local languages (Nepali and regional languages), and accessible on smartphones. Visual representations—color-coded calendars, icons for different crops, and simple alert systems—make information easy to understand and act upon.</p>

            <h2>Validation and Feedback</h2>
            <p>Crop calendar systems improve through farmer feedback. Tracking actual planting dates, yields, and farmer experiences helps refine recommendations. Community engagement and demonstration plots showing benefits of following calendar recommendations build trust and encourage adoption.</p>
        `
    }
};

// Page navigation function
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

// Blog post display function
function showBlogPost(postId) {
    const post = blogPosts[postId];
    const content = `
        <h1>${post.title}</h1>
        <div class="meta">${post.date} • ${post.readTime}</div>
        <div class="blog-post-content">
            ${post.content}
        </div>
    `;
    document.getElementById('blog-post-content').innerHTML = content;
    showPage('blog-post');
}

// Contact form submission handler
function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    event.target.reset();
}