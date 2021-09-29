package com.kh.ollehapp.web;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kh.ollehapp.domain.common.dao.CodeDAO;
import com.kh.ollehapp.map.dto.MapDTO;
import com.kh.ollehapp.map.svc.MapSVC;
import com.kh.ollehapp.web.api.JsonResult;
import com.kh.ollehapp.web.form.LongLatForm;
import com.kh.ollehapp.web.form.MapForm;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/map")
public class MapController {
	
	private final MapSVC mapSVC;
	private final CodeDAO codeDAO;
	
	
	@GetMapping("/{region}/{county}")
	@ResponseBody
	public JsonResult<List<MapForm>> villageList(@PathVariable String region,@PathVariable String county, Model model) {
		
	List<MapForm> list = 	mapSVC.villageList(region, county);
	
	model.addAttribute("vlist",list);
	
	return new JsonResult<List<MapForm>>("00","ok",list);
}
	
	@GetMapping("/findVillageLng")
	@ResponseBody
	public JsonResult<List<LongLatForm>> villagelng() {
		
	List<LongLatForm> list = 	mapSVC.findLongLat();
	
	
	
	return new JsonResult<List<LongLatForm>>("00","ok",list);
	}
	
	
	@GetMapping("/{region}")
	public String map(@PathVariable("region") String region, Model model) {
		
		List<MapDTO> list =
		
				mapSVC.findMarker();
				
				
				model.addAttribute("mList",list);

			
			
		return "map/map";
	}
	
	@PostMapping("/search")
	public String search(@ModelAttribute MapDTO mapDTO) {
	
	MapDTO mapDTO2=mapSVC.zoomRegion(mapDTO.getRegion(), mapDTO.getCounty());
		return "map/map";
	}
}
