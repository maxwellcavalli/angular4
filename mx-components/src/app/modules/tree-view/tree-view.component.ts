import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'mx-tree-view',
	templateUrl: './tree-view.component.html',
	styleUrls: ['./tree-view.component.css']
})
export class MxTreeViewComponent implements OnInit {

	_nodes: Array<any>;
	constructor() { }
	@Input() pai: any;

	@Input()
	set nodes(value) {
		this._nodes = value;
	}

	get nodes() {
		return this._nodes;
	}

	ngOnInit() {
	}

	getContext(node) {
		return { node: node, pai: this.pai }
	}

	public check(node, event) {
		let state = event.srcElement.checked;
		node.checked = state;

		this.checkRecursive(node, state);
	}

	private checkRecursive(node, state) {
		if (node.children) {
			node.children.forEach(d => {
				d.checked = state;
				d.indeterminate = false;
				this.checkRecursive(d, state);
			});
		}
	}

	public toggle(node) {
		node.expanded = !node.expanded;
	}

	public hasChildren(node) {
		return node.children !== undefined && node.children.length > 0;
	}

	public getAllSelected(indeterminate: boolean) {
		let selecionados = new Array<any>();

		for (let data of this.nodes) {
			let ret = this.getSelecteds(data, indeterminate);

			for (let x of ret) {
				selecionados.push(x);
			}
		}

		return selecionados;
	}

	private getSelecteds(node: any, indeterminate: boolean) {
		let selecionados = new Array<any>();

		if (node.checked || (node.indeterminate && indeterminate)) {
			selecionados.push(node);
		}

		if (node.children != undefined){
			for (let data of node.children) {
				let ret = this.getSelecteds(data, indeterminate);
	
				for (let x of ret) {
					selecionados.push(x);
				}
			}
		}

		return selecionados;
	}


}
