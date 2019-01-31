'use strict';


var mongoose = require('mongoose'),
  Sites = mongoose.model('Site');


exports.list_all_sites = function(req, res) {
    Sites.find({}, function(err, site) {
      if (err)
        res.send(err);
      res.json(site);
    });
  };

exports.create_a_site = function(req, res) {
    var new_site = new Sites(req.body);
    new_site.save(function(err, site) {
      if (err)
        res.send(err);
      res.json(site);
    });
  };

exports.read_a_site = function(req, res) {
    Sites.findById(req.params.siteId, function(err, site) {
      if (err)
        res.send(err);
      res.json(site);
    });
  };

exports.update_a_site = function(req, res) {
    Sites.findOneAndUpdate({_id: req.params.siteId}, req.body, {new: true}, function(err, site) {
      if (err)
        res.send(err);
      res.json(site);
    });
  };

exports.delete_a_site = function(req, res) {
  Sites.deleteOne({
      _id: req.params.siteId
    }, function(err, site) {
      if (err)
        res.send(err);
      res.json({ message: 'Site successfully deleted' });
    });
  };
