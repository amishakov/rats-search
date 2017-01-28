import React, { Component } from 'react';

import TorrentLine from './torrent'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import LinearProgress from 'material-ui/LinearProgress';

export default class SearchResults extends Component {
  render() {
    return (
      <List style={{minWidth: '20em'}}>
      	  {
	      	(this.props.torrentsSearchResults && this.props.torrentsSearchResults.length > 0)
	      	|| (this.props.filesSearchResults && this.props.filesSearchResults.length > 0)
	      	?
	      	<Subheader inset={true}>Search results</Subheader>
	      	:
	      	null
	      }
	      {
	      	this.props.torrentsSearchResults && this.props.torrentsSearchResults.length > 0
	      	?
	      	this.props.torrentsSearchResults.map((torrent, index) =>{
	      		return(
	      			<TorrentLine torrent={torrent} key={index} />
	      		);
	      	})
	      	:
	      	null
	      }
	      {
	      	this.props.moreTorrentsEnabled && !this.props.moreTorrentsIndicator
	      	?
	      	<div>
	      		<ListItem innerDivStyle={{textAlign: 'center', padding: '1em'}} primaryText={<span>More Torrents</span>} onClick={() => {
	      			if(this.props.onMoreTorrents)
	      				this.props.onMoreTorrents();
	      		}} />
	      		<Divider />
	      	</div>
	      	:
	      	null
	      }
	      {
	      	this.props.moreTorrentsIndicator
	      	?
	      	<div style={{padding: '0.8em'}}>
	      		<LinearProgress mode="indeterminate" />
	      	</div>
	      	:
	      	null
	      }
	      {
	      	this.props.filesSearchResults && this.props.filesSearchResults.length > 0
	      	?
	      	this.props.filesSearchResults.map((torrent, index) =>{
	      		return(
	      			<TorrentLine torrent={torrent} key={index} />
	      		);
	      	})
	      	:
	      	null
	      }
	      {
	      	this.props.moreFilesEnabled && !this.props.moreFilesIndicator
	      	?
	      	<div>
	      		<ListItem innerDivStyle={{textAlign: 'center', padding: '1em'}}  primaryText='More Files' onClick={() => {
	      			if(this.props.onMoreFiles)
	      				this.props.onMoreFiles();
	      		}} />
	      		<Divider />
	      	</div>
	      	:
	      	null
	      }
	      {
	      	this.props.moreFilesIndicator
	      	?
	      	<div style={{padding: '0.8em'}}>
	      		<LinearProgress mode="indeterminate" />
	      	</div>
	      	:
	      	null
	      }
      </List>
    );
  }
}
