import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";

// Match known identity declarations, not brand names in instructions or code.
const identity = /^You are (?:omp['’]s trusted coding assistant|a coding assistant running inside pi, a coding agent harness|an expert coding assistant operating inside pi, a coding agent harness)\.[\t ]*/gim;

export default function (pi: ExtensionAPI) {
	pi.on("before_agent_start", event => {
		let systemPrompt: string[] | undefined;
		for (let i = 0; i < event.systemPrompt.length; i++) {
			const original = event.systemPrompt[i];
			const filtered = original.replace(identity, "");
			if (filtered !== original) {
				systemPrompt ??= event.systemPrompt.slice();
				systemPrompt[i] = filtered;
			}
		}
		if (systemPrompt) return { systemPrompt };
	});
}
