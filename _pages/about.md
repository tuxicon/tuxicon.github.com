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
<a href="www.cmu.edu"> Carnegie Mellon University </a>. I'm advised by <a href="http://www.scotthudson.com" target="_blank">Scott Hudson</a> in the <a href="https://cmu-devlab.github.io/"> Devlab </a>. I work at the intersection of
Human-Computer Interaction, Ubiquitous Computing, Computational Materials Manufacturing and Cyber-Physical Human Systems. My work has been published several papers at top-tier HCI venues,
including ACM CHI, IMWUT (UbiComp), UIST, and CSCW, winning best honorable mention
award and has also featured on news outlets like New Scientist, Makezine, etc. 

I have also been a part of research teams at numberous instituitions such as the <a href="https://www.ornl.gov/division/manufacturing-science"> Manufacturing Science group </a> at <a href="https://www.ornl.gov"> Oakridge National
Lab (ORNL) </a>, <a href="http://research.microsoft.com/en-us/groups/tem/">Microsoft Research</a>,  <a href="http://hpi.de/baudisch/home.html"> HPI </a>,  <a href="http://www.inria.fr/centre/saclay"> INRIA </a>, and Xerox Research. Prior to my
Ph.D, I completed a dual degree master’s from Technical University of Berlin and
Universite Paris-Sud XI.

<h5 id="rs"> Research Vision: </h5>
<h5> Interactive Computational Materials for the Networked Built Envrionment </h5>
------

The key idea of ubiquitous computing is that as computers get miniaturized and powerful, they can be applied cheaply to digitize the physical infrastructure such as rooms, buildings, bridges, structures, neighborhoods, and cities into cyberspace. Unfortunately, this vision is not entirely realized due to end of end of Moore’s law and Dennard scaling. As a result, our devices remain power-hungry, are not seamlessly integrated, and continue to be manufactured using yesterday’s design ideas and technology. To date, the focus of device manufacturing has been on miniaturization and packing the most functionality into the smallest form factors, even though our physical infrastructure is much larger in scale. Miniaturized devices need to be deployed in massive quantities to enable interactivity in the built environment (buildings, sidewalks, etc.), leading to unsustainable power consumption as the many devices require numerous batteries. 

Further, to truly enable affordance, human interaction, and computing to be pervasive, we need to manufacture computational capabilities into “things” we interact with in our environment (e.g. furniture). Instead of power-hungry boxed form factors, we need to create battery-free devices with various form factors and materials. For example, we could integrate computing with extremely strong materials that make up our environments, such as concrete and wood and build interactive battery-free devices in structural forms like walls and tables. 

There remain several challenges related to form factor, power, sensing, actuation, and device manufacturing in the built environment scale. My work introduces "computational material devices" (see fig below) to address these issues, wherein engineered materials enable low-power, integrated sensing, and actuation with the networked physical infrastructure (buildings, structures, bridges, etc.) in our built environment. This effort is a highly interdisciplinary endeavor spanning collaborators from ECE, CEE, ME across institutions. For a complete research statement, please read it here. 




<img style="" src="/images/rvv1.png" alt="" />



<h5>Recent Research Highlights:</h5>
------

<div id="carouselExampleIndicators" class="carousel slide" data-interval="false">
<!--     <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    </ol> -->
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
                <a href="/files/imwut19-inflatables.pdf">Computational deployable structures</a> demonstrates a range of techniques, design primitives for creating custom actuated large-scale pneumatic strcutures. We utilized materials used in space structures like flexible fabrics with pre-stressed patterns to enable actuation at a larger scale. The manufactured structures can self-deploy and provide inherent actuation and sensing capabilities engineered within textile materials.
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
            <p> <a href=" /files/FiberWire-CHI2019.pdf "> Fiberwire </a> project demonstrates a method for engineering structural materials, like a carbon-fiber composite, to transmit electrical signals at a low loss and create composite objects with inherent circuitry and sensing
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
</div>

<p>
    <br />
</p>

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
	width: 20%;
	text-align: center;
}

.right {
	width: 80%;
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
			<div class="publication_column right"> <a href=" /files/ "><b> Duco: Autonomous Large-Scale Direct-Circuit-Writing (DCW) on Vertical Everyday Surfaces Using A Scalable Hanging Plotter </b></a>.
			<br /> Tingyu Cheng, Bu Li, Yang Zhang, Yunzhi Li, Charles Ramey, Eui Min Jung, Yepu Cui,  <b> Saiganesh Swaminathan</b>, Youngwook Do, Manos Tentzeris, Gregory D. Abowd, HyunJoo Oh. 
				<br /> In Proceedings of ACM Conference on Interactive, Mobile, Wearable and Ubiquitous Technologies (UbiComp 2021).
				<br /> [<a href=" ">Paper PDF (coming soon)</a>] [<a href="">ACM DL (coming soon)</a>] [<a href=" ">Demo Video (Coming Soon)</a>]</div>
		</div>
</article>			
</div>



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
	width: 20%;
	text-align: center;
}

.right {
	width: 80%;
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
	width: 20%;
	text-align: center;
}

.right {
	width: 80%;
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
	width: 20%;
	text-align: center;
}

.right {
	width: 80%;
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
	width: 20%;
	text-align: center;
}

.right {
	width: 80%;
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
	width: 20%;
	text-align: center;
}

.right {
	width: 80%;
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
	width: 20%;
	text-align: center;
}

.right {
	width: 80%;
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
	width: 20%;
	text-align: center;
}

.right {
	width: 80%;
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
	width: 20%;
	text-align: center;
}

.right {
	width: 80%;
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
	width: 20%;
	text-align: center;
}

.right {
	width: 80%;
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
	width: 20%;
	text-align: center;
}

.right {
	width: 80%;
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

