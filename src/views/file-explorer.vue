<template>
	<div class="main-container">
		<div class="search-container">
			<input
				v-model="filter"
				type="text"
				class="search-field"
				placeholder="Search file"
			/>
		</div>
		<div>
			<div class="breadcrumb">
				<router-link :to="{ name: 'home' }"> Home </router-link>
				<span v-if="currentDirectory.pathToRoot.length > 0"> / </span>
				<template
					v-for="(file, index) in currentDirectory.pathToRoot"
					:key="file.id"
				>
					<router-link
						:to="{ name: 'home', params: { id: file.id } }"
						class="link"
					>
						{{ file.name }}
					</router-link>
					<span v-if="index !== currentDirectory.pathToRoot.length - 1">
						/
					</span>
				</template>
			</div>
			<div v-if="filteredFiles.length === 0" class="no-files outline-container">
				No files in this directory
			</div>
			<div v-else class="grid-container outline-container">
				<!-- @dragover.prevent is needed to register the @drop event -->
				<file-item
					v-for="file in filteredFiles"
					:key="file.id"
					:is-directory="file.isDirectory"
					:name="file.name"
					draggable="true"
					@dragover.prevent
					@dragstart="handleDragStart($event, file)"
					@drop="file.isDirectory ? handleDrop($event, file) : undefined"
					@click="handleFileClick(file)"
				/>
			</div>
		</div>
	</div>
</template>