import type React from "react";

type BadgeProps = {
	children: React.ReactNode;
	variant: "active" | (string & {});
};

function Badge({ children, variant }: BadgeProps) {
	function split(str: string) {
		const segmenter = new Intl.Segmenter(undefined, {
			granularity: "grapheme",
		});

		return Array.from(segmenter.segment(str), (s) => s.segment);
	}

	return <span className={`tag ${variant}`}>{split(children as string)}</span>;
}

export default Badge;
