import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Command } from 'cmdk';

interface SearchItem {
	label: string;
	targetId: string;
}

interface SearchGroup {
	heading: string;
	items: SearchItem[];
}

const GROUPS: SearchGroup[] = [
	{
		heading: 'Sections',
		items: [
			{ label: 'About', targetId: '#about' },
			{ label: 'Experience', targetId: '#experience' },
			{ label: 'Skills', targetId: '#skills' },
			{ label: 'Projects', targetId: '#projects' },
			{ label: 'Contact', targetId: '#contact' },
		],
	},
	{
		heading: 'Experience',
		items: [
			{ label: 'Engineer III — Edward Jones', targetId: '#exp-edward-jones' },
			{ label: 'Field Systems Analyst II — The Purple Guys', targetId: '#exp-purple-guys' },
			{ label: 'Senior IT Support Technician — University of Kansas', targetId: '#exp-university-of-kansas' },
			{ label: 'IT Specialist — BestMacs', targetId: '#exp-bestmacs' },
			{ label: 'Senior AppleCare Advisor — Apple', targetId: '#exp-apple' },
		],
	},
	{
		heading: 'Skills',
		items: [
			{ label: 'Languages & Scripting', targetId: '#cat-languages' },
			{ label: 'Infrastructure & Cloud', targetId: '#cat-infrastructure' },
			{ label: 'Observability & Tooling', targetId: '#cat-observability' },
			{ label: 'AI & Automation', targetId: '#cat-ai-automation' },
			{ label: 'Core Competencies', targetId: '#cat-core-competencies' },
			{ label: 'Python', targetId: '#cat-languages' },
			{ label: 'Bash', targetId: '#cat-languages' },
			{ label: 'PowerShell', targetId: '#cat-languages' },
			{ label: 'SQL', targetId: '#cat-languages' },
			{ label: 'JavaScript', targetId: '#cat-languages' },
			{ label: 'TypeScript', targetId: '#cat-languages' },
			{ label: 'Go', targetId: '#cat-languages' },
			{ label: 'Ansible', targetId: '#cat-infrastructure' },
			{ label: 'Terraform', targetId: '#cat-infrastructure' },
			{ label: 'Docker', targetId: '#cat-infrastructure' },
			{ label: 'Kubernetes', targetId: '#cat-infrastructure' },
			{ label: 'AWS', targetId: '#cat-infrastructure' },
			{ label: 'Azure', targetId: '#cat-infrastructure' },
			{ label: 'Linux (RHEL/Debian)', targetId: '#cat-infrastructure' },
			{ label: 'macOS', targetId: '#cat-infrastructure' },
			{ label: 'Windows Server', targetId: '#cat-infrastructure' },
			{ label: 'Grafana', targetId: '#cat-observability' },
			{ label: 'Dynatrace', targetId: '#cat-observability' },
			{ label: 'Splunk', targetId: '#cat-observability' },
			{ label: 'Prometheus', targetId: '#cat-observability' },
			{ label: 'Uptime Kuma', targetId: '#cat-observability' },
			{ label: 'Git', targetId: '#cat-observability' },
			{ label: 'Jenkins', targetId: '#cat-observability' },
			{ label: 'Jira', targetId: '#cat-observability' },
			{ label: 'Jamf Pro', targetId: '#cat-observability' },
			{ label: 'LLM APIs', targetId: '#cat-ai-automation' },
			{ label: 'Ollama', targetId: '#cat-ai-automation' },
			{ label: 'Model Context Protocol', targetId: '#cat-ai-automation' },
			{ label: 'AI agent orchestration', targetId: '#cat-ai-automation' },
			{ label: 'Prompt engineering', targetId: '#cat-ai-automation' },
			{ label: 'CI/CD', targetId: '#cat-core-competencies' },
			{ label: 'Disaster Recovery', targetId: '#cat-core-competencies' },
			{ label: 'Root-Cause Analysis', targetId: '#cat-core-competencies' },
			{ label: 'DNS/DHCP/VLANs', targetId: '#cat-core-competencies' },
			{ label: 'Capacity Planning', targetId: '#cat-core-competencies' },
			{ label: 'Change Management', targetId: '#cat-core-competencies' },
			{ label: 'Agile/Scrum', targetId: '#cat-core-competencies' },
		],
	},
	{
		heading: 'Projects',
		items: [
			{ label: 'Enterprise Document Platform Upgrade', targetId: '#project-document-platform' },
			{ label: 'Legacy Application Disaster Recovery Exercise', targetId: '#project-dr-exercise' },
			{ label: 'Local Business Technology Overhaul', targetId: '#project-local-business' },
			{ label: 'Homelab', targetId: '#project-homelab' },
			{ label: 'TGO Multi-Agent Orchestration Plugin', targetId: '#project-tgo' },
		],
	},
];

export default function SearchCommand() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onOpenSearch = () => setOpen(true);
		const onKeyDown = (event: KeyboardEvent) => {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
				event.preventDefault();
				setOpen((prev) => !prev);
			}
		};
		window.addEventListener('open-search', onOpenSearch);
		window.addEventListener('keydown', onKeyDown);
		return () => {
			window.removeEventListener('open-search', onOpenSearch);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, []);

	const handleSelect = (targetId: string) => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		document.querySelector(targetId)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
		setOpen(false);
	};

	return (
		<Dialog.Root
			open={open}
			onOpenChange={setOpen}
		>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 z-50 bg-ink/60" />
				<Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border-4 border-ink bg-card p-2 shadow-hard-lg outline-none">
					<Dialog.Title className="sr-only">Search</Dialog.Title>
					<Dialog.Description className="sr-only">
						Search the site by section, project, or skill.
					</Dialog.Description>
					<Command>
						<div className="flex items-center gap-3 border-b-2 border-ink/10 px-3 py-3">
							<svg
								viewBox="0 0 24 24"
								width="18"
								height="18"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden="true"
								className="shrink-0 text-muted"
							>
								<circle cx="11" cy="11" r="8" />
								<path d="M21 21l-4.35-4.35" />
							</svg>
							<Command.Input
								placeholder="Search sections, projects, skills…"
								className="w-full bg-transparent text-base font-semibold text-ink placeholder:text-muted focus:outline-2 focus:outline-ink"
							/>
						</div>
						<Command.List className="max-h-[320px] overflow-y-auto overscroll-contain px-2 pb-2">
							<Command.Empty className="px-3 py-8 text-center text-sm font-medium text-muted">
								No results found.
							</Command.Empty>
							{GROUPS.map((group) => (
								<Command.Group
									key={group.heading}
									heading={
										<span className="px-3 pb-1.5 pt-4 font-mono text-xs font-bold uppercase tracking-widest text-muted">
											{group.heading}
										</span>
									}
								>
									{group.items.map((item) => (
										<Command.Item
											key={item.label}
											value={item.label}
											onSelect={() => handleSelect(item.targetId)}
											className="flex cursor-pointer items-center rounded-xl px-3 py-2 text-sm font-semibold text-ink transition-colors data-[selected=true]:bg-accent data-[selected=true]:text-ink-strong hover:bg-accent"
										>
											{item.label}
										</Command.Item>
									))}
								</Command.Group>
							))}
						</Command.List>
					</Command>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
