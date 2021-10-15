---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm a Ph.D. Candidate at the <a href="http://www.hcii.cmu.edu/">  Human-Computer Interaction Institute </a> in the <a href="https://www.cs.cmu.edu/"> School of Computer Science </a> of
<a href="http://www.cmu.edu"> Carnegie Mellon University </a>. I'm advised by <a href="http://www.scotthudson.com" target="_blank">Scott Hudson</a> in the <a href="https://cmu-devlab.github.io/"> Devlab </a>. I work at the intersection of
Human-Computer Interaction, Ubiquitous Computing, Computational Materials Manufacturing and Cyber-Physical Human Systems. My work has been published at top-tier HCI venues,
including ACM CHI, IMWUT (UbiComp), UIST, and CSCW, winning best honorable mention
award and has also featured on news outlets like New Scientist, Makezine, etc. 

I have also been a part of research teams at numerous institutions such as the <a href="https://www.ornl.gov/division/manufacturing-science"> Manufacturing Science group </a> at <a href="https://www.ornl.gov"> Oakridge National
Lab (ORNL) </a>, <a href="http://research.microsoft.com/en-us/groups/tem/">Microsoft Research</a>,  <a href="http://hpi.de/baudisch/home.html"> HPI </a>,  <a href="http://www.inria.fr/centre/saclay"> INRIA </a>, and Xerox Research. Prior to my
Ph.D, I completed a dual degree master’s from Technical University of Berlin and
Universite Paris-Sud XI.

<h5 id="rs">Interactive Computational Materials for the Networked Built Environment </h5>
------
<!-- My long-term research vision is to enable affordable and sustainable cyber infrastructure (buildings, parks, structures, sidewalks, etc.) that fits people's aspirations and needs. 

 Human-Computer Interaction (HCI) researcher, I engineer infrastructure materials (e.g., concrete, composites, wood, etc.) with computing technologies such as power-efficient sensors, actuators, and wireless communication capabilities, resulting in computational physical infrastructure. This effort is a highly interdisciplinary endeavor and has collaborators in various fields such as HCI/CS, ECE (Electrical and Computer engineering), and CEE (Civil and Environmental Engineering) from across research institutions.
My application-driven approach often leads to building computational artifacts from scratch with materials, manufacturing processes, exploring various compute architecture, sensing/actuation/AI approaches ultimately leading up to device design (see fig 1. left). The manufactured computational material devices are applied to various challenges in the built environment (see fig 1. right) such as accessibility, digital buildings, urban mobility, and cyber-physical infrastructure.  -->



The key idea of ubiquitous computing is that as computers get miniaturized and powerful, they can be applied cheaply to digitize the physical infrastructure (rooms, buildings, structures, bridges, etc.). Unfortunately, this vision is not entirely realized due to the <b>end of Moore’s law and Dennard scaling.</b> As a result, our devices remain power-hungry, are not seamlessly integrated, and continue to be manufactured using yesterday’s design ideas and technology. To date, the focus of device manufacturing has been on miniaturization and packing the most functionality into the smallest form factors, even though our <b>physical infrastructure is much larger</b> in scale. Miniaturized devices need to be deployed in massive quantities to enable interactivity in the built environment (buildings, sidewalks, etc.), leading to <b>unsustainable power consumption</b> as many devices require numerous batteries. Instead of today's power-hungry boxed form factors, we need to create battery-free devices with various form factors and materials. For example, I <b> integrate computing with extremely strong materials (e.g, concrete, and wood)</b> that make up our environments, and build <b>battery-free</b> interactive devices in structural forms like walls and tables. 
 

As an experimental computer scientist and Human-Computer Interaction (HCI) researcher, I introduce <b>computationally engineered materials that enable low-power, integrated sensing, and actuation in the networked physical infrastructure (e.g., buildings) forms</b>. This effort is a highly interdisciplinary endeavor and has collaborators in various fields such as HCI/CS, ECE (Electrical and Computer engineering), CEE (Civil and Environmental Engineering), Materials Science, and Manufacturing from across research institutions.

<img style="" src="/images/vision_saiv2.png" alt="" />


<h5>Recent Research Highlights:</h5>
------

<!-- <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="5000">
   <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    </ol> 
    <div class="carousel-inner">
         <div class="carousel-item active">
            <p>Duco is a large-scale robotic platform that sketches sensors, antennas, energy harvesters on walls, glass facades, etc. of buildings, turning such large surfaces into smart self-sustainable sensing skins.</p>
            <div class="row">
        		<div class="col-sm col-xs-8">
                    <img class="d-block w-100" src="/images/duco_robot_verticle-min.png" alt="Second slide" />
                </div>
                <div class="col-sm col-xs-4">
            		<div class="card">
            			<h1> Video</h1>
           			    <p class="card-text">Coming Soon</p>
           			</div>
           		 		<div class="col-sm col-xs-4" style="padding-left:0px;">    	
	           				<div class="">
	            				<h6> Collaboration:</h6>
	            						<div class="row" style="margin-left: 0px;">
	            						<div class="col-auto col-xs-4" style="padding: 0px">  
			            				<img style="max-width: 150px;" src="/images/GT-IC.png" alt="GT-logo"/> 
			            				</div>
			            				<div class="col-auto col-xs-4" style="padding: 0px">  
			            				<img style="max-width: 150px;" src="/images/gtecelogo.jpeg" alt="GT-logo"/>
			            				</div>	
			            				<div class="col-auto col-xs-4" style="padding: 0px">  
			            			    <img style="max-width: 150px;" src="/images/NU.png" alt="NU-logo"/>
			            			    </div>
			            			    </div> 
	            			</div>
	            		</div>
            	</div> 
            </div>
        </div>
        <div class="carousel-item">
            <p>
                <a href=" /files/optistructures-ubicomp2020.pdf"> Optistructures </a>  introduces a method for manufacturing computational capabilities into room-scale physical structures like walls, tables, furniture, etc., using an optical approach.  Common building materials (concrete, plaster, etc.) are programmatically embedded with optical fibers to provide sensing and displays for interaction with structures. The embedded optical fibers act as sensors as they are manufactured with Bragg-gratings, which are nanometer-scale optical reflectors. The Bragg-gratings backscatter light (fig below) at a specific wavelength when the optical fibers are probed with a broadspectrum photonic source. Any minute perturbance (microstrain) around the manufactured structure changes the wavelength of the backscattered light and is detected using a Mach-Zender Interferometer (MZI) photonic system for further processing with ML models. OptiStructures provide energy-efficient sensing at an infrastructure scale, in buildings, bridges, roads, etc., as 1000’s Bragg-gratings reflectors located along long lengths of optical fiber (~70km) reflect light without using any local power or batteries.
            </p>
            <div class="row">
        		<div class="col-sm col-xs-8">
                    <img style="width:-webkit-fill-available;" class="d-block w-100" src="/images/city-scalev6-vertical.png" alt="Third slide" />
                </div>
                <div class="col-sm col-xs-4">
            		<div class="video-container">
                  		<iframe class="fitvidsignore" src="https://www.youtube.com/embed/fMrbOASsiY8" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  	</div>
                	<div class="col-sm col-xs-4" style="padding-left:0px;">      	
		                 <div class="">
		            				<h6> Collaboration:</h6>
		            				<div class="row" style="margin-left: 0px;">
		            				<div class="col-auto col-xs-4" style="padding:0px">  
		            				<img style="max-width: 25px;" src="/images/stree.png" alt="S-logo"/>
		            				</div>
		            				<div class="col-auto col-xs-4" style="padding: 0px">  		
		            				<img style="max-width: 160px;" src="/images/Stanford-CEElogo.jpeg" alt="S-logo"/>
		            				</div>
		            				<div class="col-auto col-xs-4" style="padding: 0px">  		
		            				<img style="max-width: 160px;" src="/images/cmu-cee.png" alt="cmucee-logo"/>
		            				</div>
		            				</div>	
		           		</div>
		           	</div>  		    		
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <p>
                <a href="/files/imwut19-inflatables.pdf">Computational deployable structures</a> demonstrates a range of techniques, design primitives for creating custom actuated large-scale pneumatic structures. We utilized materials used in space structures like flexible fabrics with pre-stressed patterns to enable actuation at a larger scale. The manufactured structures can self-deploy and provide inherent actuation and sensing capabilities engineered within textile materials.
            </p>
            <div class="row">
        		<div class="col-sm col-xs-8">
                    <img style="width:-webkit-fill-available;" class="d-block w-100" src="/images/deployable_structure_webv2.png" alt="Fourth slide" />
                </div>
                <div class="col-sm col-xs-4">
            		<div class="video-container">
                  		<iframe class="fitvidsignore" src="https://www.youtube.com/embed/ioGmbFb4SfI" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  	</div>
                  	<div class="col-sm col-xs-4" style="padding-left:0px;">      	
		                 <div class="">
		            				<h6> Collaboration:</h6>
		            				<div class="row" style="margin-left: 0px;">
		            				<div class="col-auto col-xs-4" style="padding:0px">  
		            				<img style="max-width: 200px;" src="/images/CMU_Meche_logo.jpeg" alt="S-logo"/>
		            				</div>
		            				</div>	
		           		</div>
		           	</div> 	
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <p> <a href=" /files/FiberWire-CHI2019.pdf "> FiberWire </a> project demonstrates a method for engineering structural materials, like a carbon-fiber composite, to transmit electrical signals at a low loss and create composite objects with inherent circuitry and sensing
                capability via 3D printing. This system manufactures computational composite objects that perform sensing even while bearing large impact forces of 4000 lbs under extreme mechanical conditions.</p>
            <div class="row">
        		<div class="col-sm col-xs-8">
                    <img class="d-block w-100" src="/images/bike_picv5_verticle-min.png" alt="First slide" />
                </div>
                <div class="col-sm col-xs-4">
            		<div class="video-container">
                  		<iframe class="fitvidsignore" src="https://www.youtube.com/embed/3k4Eh-I3A1A" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  	</div>
          			<div class="col-sm col-xs-4" style="padding-left:0px;">      	
		                 <div class="">
		            				<h6> Collaboration:</h6>
		            				<div class="row" style="margin-left: 0px;">
		            				<div class="col-auto col-xs-4" style="padding:0px">  
		            				<img style="max-width: 200px;" src="/images/CMU_Meche_logo.jpeg" alt="S-logo"/>
		            				</div>
		            				</div>	
		           		</div>
		           	</div>  		    		
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" data-target="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" data-target="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
     
 <div class="carousel-indicators" style="margin-bottom: -20px;">
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
      style="width: 100px;"
    >
      <img
        class="d-block w-100"
        src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg"
        class="img-fluid"
      />

    </button>
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
      style="width: 100px;"
    >
      <img
        class="d-block w-100"
        src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg"
        class="img-fluid"
      />
    </button>
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
      style="width: 100px;"
    >
      <img
        class="d-block w-100"
        src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg"
        class="img-fluid"
      />
    </button>
  </div> 
    
</div> -->	

   <section class="page-section portfolio" id="portfolio">
            <div class="container">
                <div class="row justify-content-between">        
                    <div style="margin-bottom: 0px" class="rh col-md-6 col-lg-6 mb-5" id="project2" onmouseover="PlayVideo(2)" onmouseleave="StopVideoPlay(2)">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <video  preload="auto" id="video2" poster="/images/project/thumb_optiv3.png" style= "min-height: 253px; margin-top: 1em" loop="" muted="" playsinline="" width="100%"><source type="video/webm" src="/files/optistructures-gifv2.webm"><source src="/files/optistructures-gifv2.mp4" type="video/mp4"></video>	
                            <h6>OptiStructures:</h6>
							<span class="badge badge-secondary">Photonics</span>
							<span class="badge badge-secondary">Bragg-Gratings</span>
							<span class="badge badge-secondary">Fabry–Pérot Interferometery</span>
							<span class="badge badge-secondary">Battery-Free</span>
							<span class="badge badge-secondary">Concrete</span>
							<span class="badge badge-secondary">Plaster</span>
                            <div class="col-sm col-xs-4" style="padding-left:0px;">      	
				                 <div style="padding-top: 10px;">
				            				<h6> Collaboration</h6>
				            				<div class="row" style="margin-left: 0px;">
				            				<div class="col-auto col-xs-4" style="padding:0px">  
				            				<img style="max-width: 25px;" src="/images/stree.png" alt="S-logo"/>
				            				</div>
				            				<div class="col-auto col-xs-4" style="padding: 0px">  		
				            				<img style="max-width: 160px;" src="/images/Stanford-CEElogo.jpeg" alt="S-logo"/>
				            				</div>
				            				<div class="col-auto col-xs-4" style="padding: 0px">  		
				            				<img style="max-width: 200px;" src="/images/cmu-cee.png" alt="cmucee-logo"/>
				            				</div>
				            				</div>	
				           		 </div>
				           	</div>	
				           	<br/>		
				            <a class="exp" style="font-weight: bold;  text-transform: uppercase; color: rgba(165,20,23,1);">Show Details</a>		
                    </div>
                </div>
                <div style="margin-bottom: 1rem" class="rh col-md-6 col-lg-6 mb-5" id="project3" onmouseover="PlayVideo(3)" onmouseleave="StopVideoPlay(3)">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <video  preload="auto" id="video3" poster="/images/project/thumb_pneumaticv2.png"  style= "min-height: 253px; margin-top: 1em" loop="" muted="" playsinline="" width="100%"><source type="video/webm" src="/files/pneumatic-gifv3.webm"><source src="/files/pneumatic-gifv3.mp4" type="video/mp4"></video> 
                            <h6> Computational Depolyable Structures </h6>
							<span class="badge badge-secondary">Swept Frequency Ultrasonics</span>
							<span class="badge badge-secondary">Sensors</span>
							<span class="badge badge-secondary">Large-scale Actuators</span>
							<span class="badge badge-secondary">Room-Scale Pneumatics</span>
							<span class="badge badge-secondary">Trusses</span>
                            <div class="col-sm col-xs-4" style="padding-left:0px;">      	
				                 <div style="padding-top: 10px;">
				            				<h6> Collaboration:</h6>
				            				<div class="row" style="margin-left: 0px;">
				            				<div class="col-auto col-xs-4" style="padding:0px">  
				            				<img style="max-width: 150px;" src="/images/CMU_Meche_logo.jpeg" alt="S-logo"/>
				            				</div>
				            				<div class="col-auto col-xs-4" style="padding:0px">  
				            				<img style="padding-left: 10px; max-width: 170px; margin-top:20px;" src="/images/CMU_Arch.jpeg" alt="S-logo"/>
				            				</div>
				            				</div>	
				           		</div>
		           			</div>	
		           			<br/>		
				            <a class="exp" style="font-weight: bold;  text-transform: uppercase; color: rgba(165,20,23,1);">Show Details</a>				 	
                        </div>
                   </div>
              </div>      
                <div class="row justify-content-between">	    
                    <div style="margin-bottom: 1rem" class="rh col-md-6 col-lg-6 mb-5 mb-lg-0" id="project4" onmouseover="PlayVideo(4)" onmouseleave="StopVideoPlay(4)" >
                        <div class="rh portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <video   preload="auto" poster="/images/project/thumb_fiberv2.png" id="video4" style= "min-height: 253px; margin-top: 1em" loop="" muted="" playsinline="" width="100%"><source type="video/webm" src="/files/fiberwire-gifv2.webm"><source src="/files/fiberwire-gifv2.mp4" type="video/mp4"></video>    
                            <h6> FiberWire </h6>
                            <span class="badge badge-secondary">Carbon-Fiber Composites</span>
							<span class="badge badge-secondary">Advanced Structural Materials</span>
							<span class="badge badge-secondary">3D printing</span>
							<span class="badge badge-secondary">Electronic Interfacing</span>
							<span class="badge badge-secondary">Form Factor</span>
							<span class="badge badge-secondary">Strong</span>		
                            <div class="col-sm col-xs-4" style="padding-left:0px;">      	
			                 	<div style="padding-top: 10px;">
			            				<h6> Collaboration:</h6>
			            				<div class="row" style="margin-left: 0px;">
			            				<div class="col-auto col-xs-4" style="padding:0px">  
			            				<img style="max-width: 150px;" src="/images/CMU_Meche_logo.jpeg" alt="S-logo"/>
			            				</div>
			            				</div>	
			           			</div>
		           			</div>
		           			<br/>		
				            <a class="exp" style="font-weight: bold;  text-transform: uppercase; color: rgba(165,20,23,1);">Show Details</a>				 		
                        </div>
                    </div>
                    <div style="margin-bottom: 0px" class="rh col-md-6 col-lg-6 mb-5" id="project1" onmouseover="PlayVideo(1)" onmouseleave="StopVideoPlay(1)">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <video  preload="auto" id="video1" poster="/images/project/thumb_ducov2.png" style= "min-height: 253px; margin-top: 1em" loop="" muted="" playsinline="" width="100%"><source type="video/webm" src="/files/duco-gifv3.webm"><source src="/files/duco-gifv3.mp4" type="video/mp4"></video>
							<h6>Duco</h6>
							<span class="badge badge-secondary">Robotics</span>
							<span class="badge badge-secondary">Energy Harvesters</span>
							<span class="badge badge-secondary">Antennas</span>
							<span class="badge badge-secondary">Sensors</span>
							<span class="badge badge-secondary">Battery-Free</span>
							<span class="badge badge-secondary">Large-Scale Circuits</span>
                            <div class="col-sm col-xs-4" style="padding-left:0px;">    	
	           				<div style="padding-top: 10px;">
	            				<h6> Collaboration</h6>
	            						<div class="row" style="margin-left: 0px;">
	            						<div class="col-auto col-xs-4" style="padding: 0px">  
			            				<img style="max-width: 150px;" src="/images/GT-IC.png" alt="GT-logo"/> 
			            				</div>
			            				<div class="col-auto col-xs-4" style="padding: 0px">  
			            				<img style="padding-left: 10px; max-width: 150px;" src="/images/gtecelogo.jpeg" alt="GT-logo"/>
			            				</div>	
			            				<div class="col-auto col-xs-4" style="padding: 0px">  
			            			    <img style="padding-left: 10px; max-width: 150px;" src="/images/NU.png" alt="NU-logo"/>
			            			    </div>
			            			    </div> 
	            			</div>
	            			<br/>
	            			<a class="exp" style="font-weight: bold;  text-transform: uppercase; color: rgba(165,20,23,1);">Show Details</a>		
	            			</div>
                            <!-- <img class="img-fluid" src="assets/img/portfolio/cabin.png" alt="..." /> -->
                        </div>
                    </div>    
                </div>
           </div>  
    </section>




<h5 id="pubs">Publications:</h5>
------

<p>
    <br />
</p>

<style>
* {
	box-sizing: border-box;
}


/* Create two unequal columns that floats next to each other */

.publication_column {
	float: left;
	padding: 10px;
}

.left {
	margin-top: 10px;
	width: 40%;
	text-align: center;
}

.right {
	width: 60%;
}


/* Clear floats after the columns */

.publication_row:after {
	content: "";
	display: table;
	clear: both;
}
</style>
<div class=" list__item">
	<article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
		<div class="publication_row">
			<div class="publication_column left"> <img src="/images/project/duco_robot.png" alt="" />
				<br />
				<br /><b>UbiComp 2021</b></div>
			<div class="publication_column right"> <a href=" /files/project/"><b> Duco: Autonomous Large-Scale Direct-Circuit-Writing (DCW) on Vertical Everyday Surfaces Using A Scalable Hanging Plotter </b></a>.
			<br /> Tingyu Cheng, Bu Li, Yang Zhang, Yunzhi Li, Charles Ramey, Eui Min Jung, Yepu Cui,  <b> Saiganesh Swaminathan</b>, Youngwook Do, Manos Tentzeris, Gregory D. Abowd, HyunJoo Oh. 
				<br /> In Proceedings of ACM Conference on Interactive, Mobile, Wearable and Ubiquitous Technologies (UbiComp 2021).
				<br /> [<a href="files/duco-UbiComp2021.pdf">Paper PDF</a>] [<a href="https://dl.acm.org/doi/10.1145/3478118">ACM DL</a>] [<a href="https://www.youtube.com/M0_BdEHfByM">Demo Video</a>]</div>
		</div>
</article>			
</div>

<div class=" list__item">
	<article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
		<div class="publication_row">
			<div class="publication_column left"> <img src="/images/project/navtile.jpg" alt="" />
				<br />
				<br /><b>CHI 2021</b></div>
			<div class="publication_column right"> <a href=" /files/navtile_camera_ready_tagged_CHI2021.pdf "><b>From Tactile to NavTile: Opportunities and Challenges for Multi-Modal Feedback in Guiding Surfaces during Non-Visual Navigation</b></a>
				<br /> <b>Saiganesh Swaminathan </b>, Yellina Yim, Scott E Hudson, Cynthia L Bennett, and Patrick Carrington.
				<br /> Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (CHI 2021). Tokyo, Japan.
				<!-- <br /> <b>🏅 Best Paper Honorable Mention Award</b> -->
				<br /> [<a href="files/navtile_camera_ready_tagged_CHI2021.pdf">Paper PDF</a>] [<a href="https://dl.acm.org/doi/10.1145/3411764.3445716">ACM DL</a>] [<a href="https://youtu.be/N-hOSd9KX88">Talk Video</a>]</div>
		</div>
	</article>
</div>

<div class=" list__item">
	<article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
		<div class="publication_row">
			<div class="publication_column left"> <img src="/images/project/optistructures.jpg" alt="" />
				<br />
				<br /><b>UbiComp 2020</b></div>
			<div class="publication_column right"> <a href=" /files/optistructures-ubicomp2020.pdf"><b> OptiStructures: Fabrication of Room-Scale Interactive Structures with Embedded Fiber Bragg Grating Optical Sensors and Displays </b></a>
				<br /> <b>Saiganesh Swaminathan </b>,Jonathon Fagert, Michael Rivera, Andrew Cao, Gierad Laput, Haeyoung Noh, and Scott E. Hudson.
				<br /> In Proceedings of ACM Conference on Interactive, Mobile, Wearable and Ubiquitous Technologies (UbiComp 2020). Cancun, Mexico.
				<br /> <b>Accepted on initial submission (top 4%)</b>
				<br /> [<a href=" /files/optistructures-ubicomp2020.pdf">Paper PDF</a>] [<a href="https://www.youtube.com/watch?v=fMrbOASsiY8">Demo Video</a>] [<a href="https://dl.acm.org/doi/10.1145/3397310">ACM DL</a>][<a href="https://www.youtube.com/watch?v=neqyrWicxR8">Talk Video</a>]</div>
		</div>
	</article>
</div>

<div class=" list__item">
	<article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
		<div class="publication_row">
			<div class="publication_column left"> <img src="/images/project/handle_bar_carbon_fiber.png" alt="" />
				<br />
				<br /><b>CHI 2019</b></div>
			<div class="publication_column right"> <a href=" /files/FiberWire-CHI2019.pdf "><b> FiberWire: 3D Printing Mechanically Strong, Lightweight Carbon-Fiber Composite Devices with Embedded Electronic Function.  </b></a>
				<br /> <b> Saiganesh Swaminathan </b>,  Kadri Bugra Ozutemiz, Carmel Majidi, Scott E. Hudson.
				<br /> In proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (CHI 2019), Glasgow, United Kingdom.
				<br /> [<a href=" /files/FiberWire-CHI2019.pdf">Paper PDF</a>] [<a href="https://dl.acm.org/doi/10.1145/3290605.3300797">ACM DL</a>] [<a href="https://www.youtube.com/watch?v=3k4Eh-I3A1A">Demo Video</a>]</div>
		</div>
	</article>
</div>

<div class=" list__item">
	<article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
		<div class="publication_row">
			<div class="publication_column left"> <img src="/images/project/deployable.jpg" alt="" />
				<br />
				<br /><b>UbiComp 2019</b></div>
			<div class="publication_column right"> <a href=" /files/imwut19-inflatables.pdf"><b> Input, Output and Construction Methods for Custom Fabrication of Room-Scale Deployable Pneumatic Structures</b></a>
				<br />  <b>Saiganesh Swaminathan</b>, Michael L. Rivera, Runchang Kang, Zheng Luo, Kadri B. Ozutemiz, and Scott E. Hudson.
				<br /> In Proceedings of ACM Conference on Interactive, Mobile, Wearable and Ubiquitous Technologies (UbiComp 2019). London, United Kingdom.
				<br /> [<a href=" /files/imwut19-inflatables.pdf">Paper PDF</a>] [<a href="https://dl.acm.org/doi/10.1145/3328933">ACM DL</a>][<a href="https://www.youtube.com/watch?v=ioGmbFb4SfI">Demo Video</a>] </div>
		</div>
	</article>
</div>
<div class=" list__item">
	<article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
		<div class="publication_row">
			<div class="publication_column left"> <img src="/images/project/learn2earn.png" alt="" />
				<br />
				<br /><b>CSCW 2019</b></div>
			<div class="publication_column right"> <a href=" /files/learn2earn-cscw-2019.pdf"><b>Learn2Earn: Using Mobile Airtime Incentives to Bolster
                                  Public Awareness Campaigns </b></a>
				<br /><b>Saiganesh Swaminathan</b>, Indrani Medhi Thies, Devansh Mehta, Edward Cutrell, Amit Sharma and Bill Thies
				<br /> In Proceedings of the ACM Human-Computer Interaction (CSCW 2019), Austin, United States
				<br /> <b>🏅 Best Paper Honorable Mention Award</b>
				<br /> [<a href=" /files/learn2earn-cscw-2019.pdf">Paper PDF</a>] [<a href="https://dl.acm.org/doi/10.1145/3359151">ACM DL</a>]</div>
		</div>
	</article>
</div>

<div class=" list__item">
	<article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
		<div class="publication_row">
			<div class="publication_column left"> <img src="/images/project/wearmail_crop.png" alt="" />
				<br />
				<br /><b>UIST 2017</b></div>
			<div class="publication_column right"> <a href=" /files/wearmail-uist2017.pdf"><b>WearMail: On-the-Go Access to Information in Your Email with a Privacy-Preserving Human Computation Workflow</b></a>
				<br /> <b>Saiganesh Swaminathan</b>, Raymond Fok, Fanglin Chen, Ting-Hao (Kenneth) Huang, Irene Lin, Rohan Jadvani, Walter S. Lasecki, Jeffrey P. Bigham
				<br /> Proceedings of the 32nd Annual ACM Symposium on User Interface Software and Technology (UIST 2017), Montreal, Canada. 
				<br /> [<a href=" /files/wearmail-uist2017.pdf">Paper PDF</a>] [<a href="https://dl.acm.org/doi/10.1145/3126594.3126603">ACM DL</a>] [<a href="">Demo Video</a>]</div>
		</div>
	</article>
</div>
<div class=" list__item">
	<article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
		<div class="publication_row">
			<div class="publication_column left"> <img src="/images/project/annotated_hit.png" alt="" />
				<br />
				<br /><b>W4A 2017</b></div>
			<div class="publication_column right"> <a href=" /files/ "><b>The Crowd Work Accessibility Problem</b></a>
				<br /> <b>Saiganesh Swaminathan</b>, Raymond Fok, Fanglin Chen, Ting-Hao (Kenneth) Huang, Irene Lin, Rohan Jadvani, Walter S. Lasecki, Jeffrey P. Bigham
				<br /> In Proceedings of the 14th Annual ACM International Web for All Conference (W4A ’17), Perth, Australia.
				<br /> <b>🏅 Best Paper Nomination</b>
				<br /> [<a href=" /files/.pdf ">Paper PDF</a>] [<a href="https://dl.acm.org/doi/10.1145/3058555.3058569">ACM DL</a>]</div>
		</div>
	</article>
</div>

<div class=" list__item">
	<article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
		<div class="publication_row">
			<div class="publication_column left"> <img src="/images/project/linespace.jpg" alt="" />
				<br />
				<br /><b>CHI 2016</b></div>
			<div class="publication_column right"> <a href=" /files/Linespace-CHI2016.pdf"><b>Linespace: a sensemaking platform for blind</b></a>
				<br /> <strong>Saiganesh Swaminathan</strong>, Thijs Roumen, Robert Kovacs, David Stangl, Stefanie Mueller and Patrick Baudisch
				<br /> In Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems (CHI 2016), San Jose, United States.
				<br /> [<a href=" /files/Linespace-CHI2016.pdf">Paper PDF</a>][<a href="https://www.youtube.com/watch?v=3S65lRE5rg8">Demo Video</a>] [<a href="https://dl.acm.org/doi/10.1145/2858036.2858245">ACM DL</a>][<a href="https://www.youtube.com/watch?v=EGxcSqq-204">Talk Video</a>]</div>
		</div>
	</article>
</div>
<div class=" list__item">
	<article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
		<div class="publication_row">
			<div class="publication_column left"> <img src="/images/project/turkbench2.png" alt="" />
				<br />
				<br /><b>CHI 2015</b></div>
			<div class="publication_column right"> <a href="/files/TurkBench-CHI2015.pdf"><b> TurkBench: Rendering the Market for Turkers </b></a>
				<br /> Benjamin V. Hanrahan, Jutta K. Willamowski,<strong>Saiganesh Swaminathan</strong>, and David B. Martin
				<br />In Proceedings of the 32nd Annual ACM Conference on Human Factors in Computing Systems (CHI 2015), Seoul, South Korea.
				<br /> [<a href=" /files/TurkBench-CHI2015.pdf">Paper PDF</a>] [<a href="https://dl.acm.org/doi/10.1145/2702123.2702279">ACM DL</a>] </div>
		</div>
	</article>
</div>

<div class=" list__item">
	<article class="archive__item" itemscope="" itemtype="http://schema.org/CreativeWork">
		<div class="publication_row">
			<div class="publication_column left"> <img src="/images/project/makervis.png" alt="" />
				<br />
				<br /><b>CHI 2014</b></div>
			<div class="publication_column right"> <a href=" /files/MakerVis-CHI2014.pdf"><b>Supporting The Design and Fabrication of Physical Visualizations</b></a>
				<br /><b>Saiganesh Swaminathan</b>, Conglei Shi, Yvonne Jansen, Pierre Dragicevic, Lora Oehlberg, Jean-Daniel Fekete.
				<br />In Proceedings of the 31st Annual ACM Conference on Human Factors in Computing Systems (CHI 2014), Toronto, Canada.
				<br /> [<a href=" /files/MakerVis-CHI2014.pdf">Paper PDF</a>] [<a href="https://dl.acm.org/doi/10.1145/2556288.2557310">ACM DL</a>] [<a href="https://www.youtube.com/watch?v=hguDrmmLXVI">Demo Video</a>] [<a href="https://www.aviz.fr/Research/Makervis">Website</a>]</div>
		</div>
	</article>
</div>



<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div class="modal-body text-center pb-5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <!-- Portfolio Modal - Title-->
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Duco</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <p style="text-align: left;">Duco is a large-scale robotic platform that sketches sensors, antennas, energy harvesters on walls, glass facades, etc. of buildings, turning such large surfaces into smart self-sustainable sensing skins.</p>
					            <div class="row">
					        		<div class="col-lg-6">
					                    <img class="d-block w-100" src="/images/duco_robot_verticle-min.png" alt="Second slide" />
					                </div>
					                <div class="col-sm-12 col-lg-6">
					  					<div class="video-container">
					                  		<iframe class="fitvidsignore" src="https://www.youtube.com/embed/M0_BdEHfByM" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					                  	</div>
					            	</div> 
					            </div>
					            <br/>
                                <button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div class="modal-body text-center pb-5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <!-- Portfolio Modal - Title-->
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">OptiStructures</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <p style="text-align: left;">
					                <a href=" /files/optistructures-ubicomp2020.pdf"> Optistructures </a>  introduces a method for manufacturing computational capabilities into room-scale physical structures like walls, tables, furniture, etc., using an optical approach.  Common building materials (concrete, plaster, etc.) are programmatically embedded with optical fibers to provide sensing and displays for interaction with structures. The embedded optical fibers act as sensors as they are manufactured with Bragg-gratings, which are nanometer-scale optical reflectors. The Bragg-gratings backscatter light (fig below) at a specific wavelength when the optical fibers are probed with a broadspectrum photonic source. Any minute perturbance (microstrain) around the manufactured structure changes the wavelength of the backscattered light and is detected using a Mach-Zender Interferometer (MZI) photonic system for further processing with machine learning (AI) models. OptiStructures provide energy-efficient sensing at an infrastructure scale, in buildings, bridges, roads, etc., as 1000’s Bragg-gratings reflectors located along long lengths of optical fiber (~70km) reflect light without using any local power or batteries.
					            </p>
					            <div class="row">
					        		<div class="col-lg-6">
					                    <img style="width:-webkit-fill-available;" class="d-block w-100" src="/images/city-scalev6-vertical.png" alt="Third slide" />
					                </div>
					                <div class="col-sm-12 col-lg-6">
					            		<div class="video-container">
					                  		<iframe class="fitvidsignore" src="https://www.youtube.com/embed/fMrbOASsiY8" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					                  	</div>
							        </div>
							    </div> 
							    <br/>      	  		    		
              					<button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div class="modal-body text-center pb-5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <!-- Portfolio Modal - Title-->
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Computational Deployable Structures</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                 <p style="text-align: left;">
					                <a href="/files/imwut19-inflatables.pdf">Computational deployable structures</a> demonstrates a range of techniques, design primitives for creating custom actuated large-scale pneumatic structures. We utilized materials used in space structures like flexible fabrics with pre-stressed patterns to enable actuation at a larger scale. The manufactured structures can self-deploy and provide inherent actuation and sensing capabilities engineered within textile materials. Finally, human interaction is possible as machine learning (AI) models are able to recognize interaction with materials and respond through actuation. 
					            </p>
					            <div class="row">
					        		<div class="col-lg-5">
					                    <img style="width:-webkit-fill-available;" class="d-block w-100" src="/images/deployable_structure_webv2.png" alt="Fourth slide" />
					                </div>
					                <div class="col-sm-12 col-lg-7">
					            		<div class="video-container">
					                  		<iframe class="fitvidsignore" src="https://www.youtube.com/embed/ioGmbFb4SfI" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					                  	</div>
					                </div>
					            </div>
					            <br/>
                                <button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                <div class="modal-body text-center pb-5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <!-- Portfolio Modal - Title-->
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">FiberWire</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <p style="text-align: left;"> <a href=" /files/FiberWire-CHI2019.pdf "> FiberWire </a> project demonstrates a method for engineering structural materials, like a carbon-fiber composite, to transmit electrical signals at a low loss and create composite objects with inherent circuitry and sensing capability via 3D printing. This system manufactures computational composite objects that perform sensing even while bearing large impact forces of 4000 lbs under extreme mechanical conditions.</p>
					            <div class="row">
					        		<div class="col-lg-7">
					                    <img class="d-block w-100" src="/images/bike_picv5_verticle-min.png" alt="First slide" />
					                </div>
					                <div class="col-sm-12 col-lg-5">
					            		<div class="video-container">
					                  		<iframe class="fitvidsignore" src="https://www.youtube.com/embed/3k4Eh-I3A1A" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					                  	</div>	    		
					                </div>
					            </div>
					            <br/>
                                <button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





