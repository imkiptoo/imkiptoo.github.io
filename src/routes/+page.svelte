<script lang="ts">
	import SectionTitle from '$lib/components/page/SectionTitle.svelte';
	import SectionSubTitle from '$lib/components/page/SectionSubTitle.svelte';
	import { onMount } from 'svelte';
	import { activeSection } from '../stores/activeSectionStore';

	// Reactive variable for the active section
	let observer: IntersectionObserver;

	let state = $state('activeSection');

	onMount(() => {
		// Create an intersection observer to track sections
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection.set(entry.target.id);
						state = entry.target.id;
					}
				});
			},
			{
				root: null, // null uses the viewport as the root
				threshold: 0, // Trigger as soon as the element starts intersecting
				rootMargin: `-84px 0px -100% 0px` // Offset to trigger the intersection
			}
		);

		// Observe all section elements
		document.querySelectorAll('section').forEach((section) => {
			observer.observe(section);
		});

		return () => {
			// Disconnect the observer on cleanup
			observer.disconnect();
		};
	});
</script>

<div class="flex flex-col space-y-4 pb-4 relative">
	<section id="home" class="height-sample">
		<SectionTitle title="127.0.0.1" />
	</section>

	<section id="about" class="height-sample">
		<SectionTitle title="About" />
			Isaac Kiptoo Mulwa is a Master of Software Engineering student at Hof University, specializing in modern software engineering practices including IoT, advanced programming, and applied cloud computing. He combines academic rigor with practical experience to deliver innovative software solutions.
	</section>

	<section id="education">
		<SectionTitle title="Education" />
		<section id="education_masters" class="height-sample pt-4">
			<SectionSubTitle title="Masters" />
				Currently pursuing a Master of Software Engineering for Industrial Applications at Hof University, focusing on:
			<ul>
				<li>IoT</li>
				<li>Component-Oriented Software Engineering</li>
				<li>Non-relational Databases</li>
				<li>Cloud Computing</li>
			</ul>
		</section>
		<section id="education_bachelors" class="height-sample pt-4">
			<SectionSubTitle title="Bachelors" />
			<p>
				Graduated with honors in Computer Science from the University of Nairobi. Published an undergraduate thesis demonstrating academic excellence.
			</p>
		</section>
	</section>

	<section id="work">
		<SectionTitle title="Work Experience" />
		<section id="work_19to21" class="height-sample pt-4">
			<SectionSubTitle title="2019 - 2021" />
			<ul>
				<li>Performed an upgrade of Sky World Limited's mobile banking software, resulting in a 40% performance improvement.</li>
				<li>Developed a cross-platform mobile and USSD banking application, deployed across 26 Credit Unions in Kenya.</li>
				<li>Led the development of an airtime sales platform tailored for merchants in Ethiopia.</li>
				<li>Engineered a mobile-based Point-of-Sale system for agency banking adopted by six Credit Unions.</li>
			</ul>
		</section>
		<section id="work_21to24" class="height-sample pt-4">
			<SectionSubTitle title="2021 - 2024" />
			Software Engineering Lead at Sky World Limited:
			<ul>
				<li>Spearheaded system integrations and standardization, boosting performance by 20%.</li>
				<li>Enhanced security with cryptographic systems for user identity and access control.</li>
				<li>Increased client acquisition rates by 50% through strategic demonstrations.</li>
				<li>Established software change tracking procedures, reducing turnaround time by 30%.</li>
			</ul>
		</section>
	</section>

	<section id="projects">
		<SectionTitle title="Projects" />
		<section id="projects_mfa" class="height-sample pt-4">
			<SectionSubTitle title="Multi-Factor Authentication System" />
			<p>
				Implemented a cryptographic MFA system ensuring secure user authentication across various platforms.
			</p>
		</section>
		<section id="projects_ndis_ds" class="height-sample pt-4">
			<SectionSubTitle title="NDIS Document Management System" />
			<p>
				Designed a document management system for Australian NDIS providers, streamlining compliance and data storage.
			</p>
		</section>
		<section id="projects_supply_chain_erp" class="height-sample pt-4">
			<SectionSubTitle title="Supply Chain ERP System" />
			<p>
				Developed an ERP solution optimizing inventory and logistics for medium-sized enterprises.
			</p>
		</section>
		<section id="projects_cdss" class="height-sample pt-4">
			<SectionSubTitle title="Database Synchronization Software" />
			<p>
				Built a real-time synchronization tool between MS SQL and MySQL databases, ensuring cross-platform consistency.
			</p>
		</section>
	</section>

	<section id="skills">
		<SectionTitle title="Skills" />
		<section id="skills_back_end" class="height-sample pt-4">
			<SectionSubTitle title="Back-End SE" />
			<ul>
				<li>Proficient in Java, Go, and Rust</li>
				<li>Expertise in microservices and cloud architecture</li>
			</ul>
		</section>
		<section id="skills_front_end" class="height-sample pt-4">
			<SectionSubTitle title="Front-End SE" />
			<ul>
				<li>Skilled in Angular and Flutter</li>
				<li>Building responsive, dynamic user interfaces</li>
			</ul>
		</section>
		<section id="skills_database" class="height-sample pt-4">
			<SectionSubTitle title="Databases" />
			<ul>
				<li>Experienced with PostgreSQL, MySQL, and MS SQL Server</li>
				<li>Creating scalable data solutions</li>
			</ul>
		</section>
		<section id="skills_devops" class="height-sample pt-4">
			<SectionSubTitle title="DevOps" />
			<ul>
				<li>Familiar with Docker</li>
				<li>Agile principles to streamline development pipelines</li>
			</ul>
		</section>
	</section>

	<section id="languages" class="height-sample">
		<SectionTitle title="Languages" />
		<p>Proficient in English (C1) and Intermediate in German (B1).</p>
	</section>

	<section id="volunteering" class="height-sample">
		<SectionTitle title="Volunteering" />
		<p>
			Volunteer Embedded Software Engineer at HofSpannung Motorsport e.V., contributing to firmware development for Formula Student race cars using Rust and C++.
		</p>
	</section>
</div>

<style>
    .height-sample {
    }

    section {
        scroll-margin-top: 0;
    }

    @media (max-width: 768px) {
        section {
            scroll-margin-top: 3.5rem;
        }
    }
</style>
