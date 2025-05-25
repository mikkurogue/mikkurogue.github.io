import type React from "react";

type BadgeProps = {
	children: React.ReactNode;
	variant: "active" | (string & {});
};

function Badge({ children, variant }: BadgeProps) {
	return <span className={`tag ${variant}`}>{children}</span>;
}

export default Badge;
