<script lang="ts">
	import SectionTitle from '$lib/components/page/SectionTitle.svelte';
	import SectionSubTitle from '$lib/components/page/SectionSubTitle.svelte';
	import { onMount } from 'svelte';
	import { activeSection } from '../stores/activeSectionStore';

	// Reactive variable for the active section
	let observer: IntersectionObserver;

	let state = $state("activeSection");

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
				rootMargin: `-84px 0px -100% 0px`, // Offset to trigger the intersection
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
		<SectionTitle title="Home"/>
	</section>

	<section id="about" class="height-sample">
		<SectionTitle title="About"/>
	</section>

	<section id="education">
		<SectionTitle title="Education"/>
		<section id="education_masters" class="height-sample pt-4">
			<SectionSubTitle title="Masters"/>
		</section>
		<section id="education_bachelors" class="height-sample pt-4">
			<SectionSubTitle title="Bachelors"/>
		</section>
	</section>

	<section id="work">
		<SectionTitle title="Work Experience"/>
		<section id="work_19to21" class="height-sample pt-4">
			<SectionSubTitle title="2019 - 2021"/>
		</section>
		<section id="work_21to24" class="height-sample pt-4">
			<SectionSubTitle title="2021 - 2024"/>
		</section>
	</section>

	<section id="projects">
		<SectionTitle title="Projects"/>
		<section id="projects_mfa" class="height-sample pt-4">
			<SectionSubTitle title="Multi-Factor Authentication System"/>
		</section>
		<section id="projects_ndis_ds" class="height-sample pt-4">
			<SectionSubTitle title="NDIS Document Management System"/>
		</section>
		<section id="projects_supply_chain_erp" class="height-sample pt-4">
			<SectionSubTitle title="Supply Chain ERP System"/>
		</section>
		<section id="projects_cdss" class="height-sample pt-4">
			<SectionSubTitle title="Database Synchronization Software"/>
		</section>
		<section id="projects_diary_management_system" class="height-sample pt-4">
			<SectionSubTitle title="Diary Management System"/>
		</section>
	</section>

	<section id="skills">
		<SectionTitle title="Skills"/>
		<section id="skills_back_end" class="height-sample pt-4">
			<SectionSubTitle title="Back-End SE"/>
		</section>
		<section id="skills_front_end" class="height-sample pt-4">
			<SectionSubTitle title="Front-End SE"/>
		</section>
				<section id="skills_database" class="height-sample pt-4">
			<SectionSubTitle title="Databases"/>
		</section>
		<section id="skills_devops" class="height-sample pt-4">
			<SectionSubTitle title="DevOps"/>
		</section>
	</section>

	<section id="languages" class="height-sample">
		<SectionTitle title="Languages"/>
	</section>
	<section id="volunteering" class="height-sample">
		<SectionTitle title="Volunteering"/>
	</section>
</div>


<style>
	.height-sample {
		height: 50vh;
	}
</style>