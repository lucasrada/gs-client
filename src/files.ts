export interface FileOrDirectory {
	id: number;
	name: string;
	isDirectory: boolean;
	parentDirectoryId: number | undefined;
}

function generateFile(
	id: number,
	parentId?: number,
	directory?: boolean
): FileOrDirectory {
	const isDirectory = directory ?? Math.random() > 0.5;
	const name = isDirectory ? `Folder ${id}` : `File ${id}`;

	return {
		id,
		name,
		isDirectory,
		parentDirectoryId: parentId,
	};
}

export function generateFiles(totalNumberOfFiles: number): FileOrDirectory[] {
	const files: FileOrDirectory[] = [];

	const directory = generateFile(1, undefined, true);
	files.push(directory);

	const directioriesGenerated: FileOrDirectory[] = [directory];
	let rootFileCount = 1;

	for (let i = 2; i < totalNumberOfFiles; i++) {
		const hasTooManyRootFiles = rootFileCount >= totalNumberOfFiles / 5;
		const pickFileFrom = hasTooManyRootFiles ? directioriesGenerated : files;

		const potentialParent = pickFileFrom.at(
			Math.floor(Math.random() * pickFileFrom.length)
		);
		const file = generateFile(
			i,
			potentialParent?.isDirectory ? potentialParent.id : undefined
		);

		if (!file.parentDirectoryId) {
			rootFileCount += 1;
		}

		if (file.isDirectory) {
			directioriesGenerated.push(file);
		}

		files.push(file);
	}

	return files;
}